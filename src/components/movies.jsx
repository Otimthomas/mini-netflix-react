import React, { Component } from "react";
import movieService from "../services/movieService";

class Movies extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		const { data: movies } = await movieService.getMovies();
		console.log(movies);
		this.setState({ movies });
	}
	render() {
		const { movies } = this.state;
		return (
			<div>
				{movies.map((movie) => (
					<div className='movie-container' key={movie._id}>
						<p>{movie.title}</p>
						<img src={movie.imgUrl} />
						<p>{movie.year}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Movies;
