import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
	state = {
		data: {
			username: "",
			email: "",
			password: ""
        },
        errors: {}
	};

	schema = {
		username: Joi.string()
			.required()
			.min(5)
			.label("Username"),
		email: Joi.string()
			.required()
			.email()
			.label("Email"),
		password: Joi.string()
			.required()
			.min(5)
			.label("Password")
	};

	render() {
		return (
			<div className='form-container'>
				<div className='form-heading'>Register</div>
				<div className='form register-form'>
					<div className='form-body'>
						<form onSubmit={this.handleSubmit}>
							{this.renderInput("username", "Username")}
							{this.renderInput("email", "Email", "email")}
							{this.renderInput("password", "Password", "password")}
							{this.renderButton("Register")}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterForm;
