var BugList = React.createClass({
    render: function() {
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable />
                <hr />
                <BugAdd />
            </div>
        );
    }
});

var BugFilter = React.createClass({
    render: function() {
        return(
            <div>
                Hello, I am a BugFilter...a filter
            </div>
        );
    }
});

var BugTable = React.createClass({
    render: function() {
        return(
            <div>
                Hello, I am a BugTable....list of all bugs
            </div>
        );
    }
});

var BugAdd = React.createClass({
    render: function() {
        return(
            <div>
                Hello, I am a BugAdd...a form to add a new bug
            </div>
        );
    }
});



ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);
