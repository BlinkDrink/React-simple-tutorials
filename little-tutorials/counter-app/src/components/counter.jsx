import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
	};

	// One way to bind "this" to event handler, the other is down below, using arrow func
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</div>
		);
	}

	handleIncrement = () => {
		console.log("Increment clicked", this);
	};

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero " : count;
	}

	getBadgeClasses() {
		let classes = "badge text-reset m-2 bg-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}
}

export default Counter;
