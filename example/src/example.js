var React = require('react');
var ReactFlagObject = require('react-flag-object');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactFlagObject />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
