var BugList = React.createClass({
    displayName: "BugList",

    render: function () {
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
            React.createElement(
                BugTable,
                null,
                React.createElement(BugRow, { id: "1", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" }),
                React.createElement(BugRow, { id: "2", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" })
            ),
            React.createElement("hr", null),
            React.createElement(BugAdd, null)
        );
    }
});

var BugFilter = React.createClass({
    displayName: "BugFilter",

    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello, I am a BugFilter...a filter"
        );
    }
});

var BugTable = React.createClass({
    displayName: "BugTable",

    render: function () {
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
                this.props.children
            )
        );
    }
});

// Single table row for a bug
var BugRow = React.createClass({
    displayName: "BugRow",

    render: function () {
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                this.props.id
            ),
            React.createElement(
                "td",
                null,
                this.props.status
            ),
            React.createElement(
                "td",
                null,
                this.props.priority
            ),
            React.createElement(
                "td",
                null,
                this.props.owner
            ),
            React.createElement(
                "td",
                null,
                this.props.title
            )
        );
    }
});

var BugAdd = React.createClass({
    displayName: "BugAdd",

    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello, I am a BugAdd...a form to add a new bug"
        );
    }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));