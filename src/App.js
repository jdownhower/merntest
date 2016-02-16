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
                <td>{this.props.bug._id}</td>
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
               <BugRow key={bug._id} bug={bug} />
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
                <form name="bugAdd">
                    <input type="text" name="owner" placeholder="Owner" />
                    <input type="text" name="title" placeholder="Title" />
                    <button onClick={this.handleSubmit}>Add Bug</button>
                </form>
            </div>
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var form = document.forms.bugAdd;
        this.props.addBug({owner: form.owner.value, title: form.title.value, status: "New", priority: "P1"});
        // clear the form
        form.owner.value = "";
        form.title.value = "";
    }
});

var BugList = React.createClass({
    getInitialState: function() {
        return {bugs: []};  
    },
    render: function() {
        console.log("Rendering BugList, num items:", this.state.bugs.length);
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.bugs} />
                <hr />
                <BugAdd addBug={this.addBug} />
            </div>
        );
    },
    addBug: function(bug) {
        console.log("Adding bug:", bug);
        $.ajax({
            url: '/api/bugs',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(bug),
            success: function(data) {
                console.log("Adding data:", data);
                var bug = data;
                var busModified = this.state.bugs.concat(bug);
                this.setState({bugs: busModified});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/bugs', status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        $.ajax({
            url: '/api/bugs',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({bugs: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/bugs', status, err.toString());
            }.bind(this)
        });
    }

});


ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);
