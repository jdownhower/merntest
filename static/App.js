var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var BugFilter = React.createClass({
    displayName: 'BugFilter',

    render: function () {
        console.log("Rendering BugFilter");
        return React.createElement(
            'div',
            null,
            'Hello, I am a BugFilter...a filter'
        );
    }
});

// Single table row for a bug
var BugRow = React.createClass({
    displayName: 'BugRow',

    render: function () {
        console.log("Rendering BugRow");
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                this.props.bug._id
            ),
            React.createElement(
                'td',
                null,
                this.props.bug.status
            ),
            React.createElement(
                'td',
                null,
                this.props.bug.priority
            ),
            React.createElement(
                'td',
                null,
                this.props.bug.owner
            ),
            React.createElement(
                'td',
                null,
                this.props.bug.title
            )
        );
    }
});

var BugTable = React.createClass({
    displayName: 'BugTable',

    render: function () {
        console.log("Rendering BugTable, num items:", this.props.bugs.length);
        var bugRows = this.props.bugs.map(function (bug) {
            return React.createElement(BugRow, { key: bug._id, bug: bug });
        });
        return React.createElement(
            'table',
            null,
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'ID'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Status'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Priority'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Owner'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Title'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                bugRows
            )
        );
    }
});

var BugAdd = React.createClass({
    displayName: 'BugAdd',

    render: function () {
        console.log("Rendering BugAdd");
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { name: 'bugAdd' },
                React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
                React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
                React.createElement(
                    'button',
                    { onClick: this.handleSubmit },
                    'Add Bug'
                )
            )
        );
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var form = document.forms.bugAdd;
        this.props.addBug({ owner: form.owner.value, title: form.title.value, status: "New", priority: "P1" });
        // clear the form
        form.owner.value = "";
        form.title.value = "";
    }
});

var BugList = React.createClass({
    displayName: 'BugList',

    getInitialState: function () {
        return { bugs: [] };
    },
    render: function () {
        console.log("Rendering BugList, num items:", this.state.bugs.length);
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Bug Tracker'
            ),
            React.createElement(BugFilter, null),
            React.createElement('hr', null),
            React.createElement(BugTable, { bugs: this.state.bugs }),
            React.createElement('hr', null),
            React.createElement(BugAdd, { addBug: this.addBug })
        );
    },
    addBug: function (bug) {
        console.log("Adding bug:", bug);
        $.ajax({
            url: '/api/bugs',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(bug),
            success: function (data) {
                console.log("Adding data:", data);
                var bug = data;
                var busModified = this.state.bugs.concat(bug);
                this.setState({ bugs: busModified });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error('/api/bugs', status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        $.ajax({
            url: '/api/bugs',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ bugs: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error('/api/bugs', status, err.toString());
            }.bind(this)
        });
    }

});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));