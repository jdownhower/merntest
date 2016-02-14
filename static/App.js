var BugFilter = React.createClass({
    displayName: "BugFilter",

    render: function () {
        console.log("Rendering BugFilter");
        return React.createElement(
            "div",
            null,
            "Hello, I am a BugFilter...a filter"
        );
    }
});

// Single table row for a bug
var BugRow = React.createClass({
    displayName: "BugRow",

    render: function () {
        console.log("Rendering BugRow");
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                this.props.bug.id
            ),
            React.createElement(
                "td",
                null,
                this.props.bug.status
            ),
            React.createElement(
                "td",
                null,
                this.props.bug.priority
            ),
            React.createElement(
                "td",
                null,
                this.props.bug.owner
            ),
            React.createElement(
                "td",
                null,
                this.props.bug.title
            )
        );
    }
});

var BugTable = React.createClass({
    displayName: "BugTable",

    render: function () {
        console.log("Rendering BugTable, num items:", this.props.bugs.length);
        var bugRows = this.props.bugs.map(function (bug) {
            return React.createElement(BugRow, { key: bug.id, bug: bug });
        });
        return React.createElement(
            "table",
            null,
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Status"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Priority"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Owner"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Title"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                bugRows
            )
        );
    }
});

var BugAdd = React.createClass({
    displayName: "BugAdd",

    render: function () {
        console.log("Rendering BugAdd");
        return React.createElement(
            "div",
            null,
            "Hello, I am a BugAdd...a form to add a new bug"
        );
    }
});

var bugData = [{ id: "101", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" }, { id: "102", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" }];

var BugList = React.createClass({
    displayName: "BugList",

    getInitialState: function () {
        return { bugs: bugData };
    },
    render: function () {
        console.log("Rendering BugList, num items:", this.state.bugs.length);
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Bug Tracker"
            ),
            React.createElement(BugFilter, null),
            React.createElement("hr", null),
            React.createElement(BugTable, { bugs: this.state.bugs }),
            React.createElement(
                "button",
                { onClick: this.testNewBug },
                "Add Bug"
            ),
            React.createElement("hr", null),
            React.createElement(BugAdd, null)
        );
    },
    testNewBug: function () {
        var nextId = this.state.bugs.length + 1;
        this.addBug({ id: nextId, status: "Open", priority: "High", owner: "Fred", title: "Test bug" });
    },
    addBug: function (bug) {
        console.log("Adding bug:", bug);
        // Do not modify the state, it's immutable, so make a copy
        var bugsModified = this.state.bugs.slice();
        bugsModified.push(bug);
        this.setState({ bugs: bugsModified });
    }

});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));