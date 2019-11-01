import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import authService from "../services/authService";

class LoginForm extends Form {
	state = {
		data: { email: "", password: "" },
		errors: {}
	};

	schema = {
		email: Joi.string()
			.required()
			.min(5)
			.email()
			.label("Username"),
		password: Joi.string()
			.required()
			.min(5)
			.label("Password")
	};

	doSubmit = async () => {
		try {
			const { data } = this.state;
			await authService.login(data.email, data.password);
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
				<div className='form-heading'>Login</div>
				<div className='form login-form'>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput("email", "Email", "email")}
						{this.renderInput("password", "Password", "password")}
						{this.renderButton("Login")}
					</form>
				</div>
			</div>
		);
	}
}

export default LoginForm;
