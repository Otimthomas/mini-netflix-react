import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
	state = {
		data: { username: "", password: "" },
		errors: {}
	};

	schema = {
		username: Joi.string()
			.required()
			.min(5)
			.label("Username"),
		password: Joi.string()
			.required()
			.min(5)
			.label("Password")
	};

	doSubmit = () => {
		console.log("Submitted");
	};

	render() {
		return (
			<div className='form-container'>
				<div className='form-heading'>Login</div>
				<div className='form login-form'>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput("username", "Usename")}
						{this.renderInput("password", "Password", "password")}
						{this.renderButton("Login")}
					</form>
				</div>
			</div>
		);
	}
}

export default LoginForm;
