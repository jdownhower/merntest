var BugList = React.createClass({
    render: function() {
        return(
            <div className="bugList">
                Hello, I am a BugList.
            </div>
        );
    }
});
ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);