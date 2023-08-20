import React, { Component } from 'react';

class DynamicUpdater extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		// This interval updates the count every second
		this.interval = setInterval(() => {
			this.setState((prevState) => ({
				count: prevState.count + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval); // Clear the interval to avoid memory leaks
	}

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
			</div>
		);
	}
}

export default DynamicUpdater;
