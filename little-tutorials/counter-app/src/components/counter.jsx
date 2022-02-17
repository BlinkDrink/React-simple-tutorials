import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: this.props.value,
	};

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
		this.setState({ value: this.state.value + 1 });
	};

	formatCount() {
		const { value: count } = this.state;
		return count === 0 ? "Zero " : count;
	}

	getBadgeClasses() {
		let classes = "badge m-2 bg-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}
}

export default Counter;
