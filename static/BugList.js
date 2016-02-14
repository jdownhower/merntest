var BugList = React.createClass({
    displayName: "BugList",

    render: function () {
        return React.createElement(
            "div",
            { className: "bugList" },
            "Hello, I am a BugList."
        );
    }
});
ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));