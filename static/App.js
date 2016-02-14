var BugList = React.createClass({
    displayName: 'BugList',

    render: function () {
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
            React.createElement(BugTable, null),
            React.createElement('hr', null),
            React.createElement(BugAdd, null)
        );
    }
});

var BugFilter = React.createClass({
    displayName: 'BugFilter',

    render: function () {
        return React.createElement(
            'div',
            null,
            'Hello, I am a BugFilter...a filter'
        );
    }
});

var BugTable = React.createClass({
    displayName: 'BugTable',

    render: function () {
        return React.createElement(
            'div',
            null,
            'Hello, I am a BugTable....list of all bugs'
        );
    }
});

var BugAdd = React.createClass({
    displayName: 'BugAdd',

    render: function () {
        return React.createElement(
            'div',
            null,
            'Hello, I am a BugAdd...a form to add a new bug'
        );
    }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));