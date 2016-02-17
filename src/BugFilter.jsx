var React = require('react');

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

module.exports = BugFilter;
