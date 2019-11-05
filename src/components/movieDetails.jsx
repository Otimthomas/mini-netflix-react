import React, { Component } from "react";
import movieService from "../services/movieService";

class MovieDetails extends Component {
	state = { movie: {} };

	async componentDidMount() {
		const id = this.props.match.params.id;
		const { data: movie } = await movieService.getMovie(id);
		this.setState({ movie });
	}

	render() {
		const { movie } = this.state;
		return (
			<React.Fragment>
				<h1>{movie._id}</h1>
				<p>{movie.title}</p>
				<img src={movie.imgUrl} />
				<p>{movie.year}</p>
			</React.Fragment>
		);
	}
}

export default MovieDetails;
