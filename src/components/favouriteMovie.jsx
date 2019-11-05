import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import movieService from "../services/movieService";

class FavouriteMovie extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		const { data: movies } = await movieService.getMovies();
		const fav = movies.filter((movie) => movie.isFavourite === true);
		this.setState({ movies: fav });
	}

	render() {
		//const {movies} = this.state;
		//return null;
		return (
			<div>
				{this.state.movies.map((movie) => (
					<div className='movie-container' key={movie._id}>
						<NavLink to={`movies/${movie._id}`}>
							<p>{movie.title}</p>
							<img src={movie.imgUrl} />
							<p>{movie.year}</p>
						</NavLink>
					</div>
				))}
			</div>
		);
	}
}

export default FavouriteMovie;
