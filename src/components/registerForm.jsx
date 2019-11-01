import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import authService from "../services/authService";
import * as userService from "../services/userService";

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

	doSubmit = async () => {
		try {
			const response = await userService.register(this.state.data);
			authService.loginWithJwt(response.headers["x-auth-token"]);
			window.location = "/movies";
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.username = ex.response.data;
				this.setState({ errors });
			}
		}
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
