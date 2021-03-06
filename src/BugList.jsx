var $ = require('jquery');
var React = require('react');
var BugAdd = require('./BugAdd.jsx');
var BugFilter = require('./BugFilter.jsx');

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

var BugList = React.createClass({
    getInitialState: function() {
        return {bugs: []};  
    },
    render: function() {
        console.log("Rendering BugList, num items:", this.state.bugs.length);
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter submitHandler={this.changeFilter} initFilter={this.props.location.query}/>
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
        console.log("BugList: componentDidMount");
        this.loadData({});
    },
    loadData: function(filter) {
        $.ajax({
            url: '/api/bugs',
            dataType: 'json',
            cache: false,
            data: filter,
            success: function(data) {
                this.setState({bugs: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/bugs', status, err.toString());
            }.bind(this)
        });  
    },
    changeFilter: function(newFilter) {
        this.props.history.push({search: '?' + $.param(newFilter)});
    },
    componentDidUpdate: function(prevProps) {
        var prevFilter = prevProps.location.query;
        var newFilter = this.props.location.query;
        if (newFilter.priority === prevFilter.priority &&
                newFilter.status === prevFilter.status) {
            console.log("BugList: componentDidUpdate, no change in filter, not update");
            return;
        } else {
            console.log("BugList: componentDidUpdate, loading data with new filter");
            this.loadData(newFilter);
        }
    }

});


module.exports = BugList;
