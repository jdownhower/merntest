var React = require('react');

var BugFilter = React.createClass({
    render: function() {
        console.log("Rendering BugFilter");
        return(
            <button onClick={this.submit}>Test Filter</button>
        );
    },
    submit: function(e) {
        var filter = {priority: "P1"};
        this.props.submitHandler(filter);
    }
});

module.exports = BugFilter;
