var BugFilter = React.createClass({
    render: function() {
        console.log("Rendering BugFilter");
        return(
            <div>
                Hello, I am a BugFilter...a filter
            </div>
        );
    }
});

// Single table row for a bug
var BugRow = React.createClass({
    render: function() {
        console.log("Rendering BugRow");
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

var BugTable = React.createClass({
    render: function() {
        console.log("Rendering BugTable, num items:", this.props.bugs.length);
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

var BugAdd = React.createClass({
    render: function() {
        console.log("Rendering BugAdd");
        return(
            <div>
                Hello, I am a BugAdd...a form to add a new bug
            </div>
        );
    }
});

var bugData = [
    { id: "101", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" },
    { id: "102", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" }    
];

var BugList = React.createClass({
    getInitialState: function() {
        return {bugs: bugData};  
    },
    render: function() {
        console.log("Rendering BugList, num items:", this.state.bugs.length);
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.bugs} />
                <button onClick={this.testNewBug}>Add Bug</button>
                <hr />
                <BugAdd />
            </div>
        );
    },
    testNewBug: function() {
        var nextId = this.state.bugs.length + 1;
        this.addBug({id: nextId, status: "Open", priority: "High", owner: "Fred", title: "Test bug" });
    },
    addBug: function(bug) {
        console.log("Adding bug:", bug);
        // Do not modify the state, it's immutable, so make a copy
        var bugsModified = this.state.bugs.slice();
        bugsModified.push(bug);
        this.setState({bugs: bugsModified});
    }

});


ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);
