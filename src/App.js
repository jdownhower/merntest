var bugs = [
    { id: "101", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" },
    { id: "102", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" }    
];

var BugList = React.createClass({
    render: function() {
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.props.bugs} />
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
        var bugRows = this.props.bugs.map(function(bug) {
           return (
               <BugRow key={bug.id} bug={bug} />
           );
        });
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Owner</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {bugRows}
                </tbody>
            </table>
        );
    }
});

// Single table row for a bug
var BugRow = React.createClass({
    render: function() {
        return(
            <tr>
                <td>{this.props.bug.id}</td>
                <td>{this.props.bug.status}</td>
                <td>{this.props.bug.priority}</td>
                <td>{this.props.bug.owner}</td>
                <td>{this.props.bug.title}</td>
            </tr>
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
    <BugList bugs={bugs} />,
    document.getElementById('main')
);
