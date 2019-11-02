import React, { Component } from "react";
import movieService from "../services/movieService";

class FavouriteMovie extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		const { data: movies } = await movieService.getMovies();
		const fav = movies.filter((movie) => movie.isFavourite === true);
		console.log(fav);
		this.setState({ movies: fav });
		console.log(this.state.movies);
	}

	render() {
		//const {movies} = this.state;
		//return null;
		return (
			<div>
				{this.state.movies.map((movie) => (
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

export default FavouriteMovie;
