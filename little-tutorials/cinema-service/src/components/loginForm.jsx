import React, { Component } from "react";

class LoginForm extends Component {
	username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	handleSubmit = (e) => {
		e.preventDefault();

		const username = this.username.current.value;
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="mb-3">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<input
							autoFocus
							ref={this.username}
							id="username"
							type="text"
							className="form-control"
							placeholder="Username"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Password"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
