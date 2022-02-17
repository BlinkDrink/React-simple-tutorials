import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag1", "tag2", "tag3"],
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags</p>;

		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
				{this.state.tags.length === 0 && "Please create a new tag"}
				{this.renderTags()}
			</div>
		);
	}

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
