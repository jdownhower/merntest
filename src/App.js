var BugList = React.createClass({
    render: function() {
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable>
                    <BugRow id="1" status="Open" priority="High" owner="Fred" title="Page Fault" />
                    <BugRow id="2" status="Test" priority="Low" owner="Barney" title="General Protection Fault" />
                </BugTable>
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
                    {this.props.children}
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
                <td>{this.props.id}</td>
                <td>{this.props.status}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.owner}</td>
                <td>{this.props.title}</td>
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
    <BugList />,
    document.getElementById('main')
);
