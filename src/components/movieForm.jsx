import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import movieService from "../services/movieService";

class MovieForm extends Form {
	state = {
		data: {
			title: "",
			imgUrl: "",
			year: ""
		},
		errors: {}
	};

	schema = {
		title: Joi.string()
			.required()
			.min(5)
			.max(255),
		imgUrl: Joi.string().required(),
		isFavourite: Joi.boolean(),
		year: Joi.string().required()
	};

	doSubmit = () => {
        movieService.saveMovie(this.state.data);
        this.props.history.replace("/");
	};

	render() {
		return (
			<div className='form-container'>
				<div className='form-heading'>MovieForm</div>
				<div className='form movie-form'>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput("title", "Title")}
						{this.renderInput("imgUrl", "ImgUrl")}
						{this.renderInput("year", "Year")}
						{this.renderButton("Save")}
					</form>
				</div>
			</div>
		);
	}
}

export default MovieForm;
