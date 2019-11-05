import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import movieService from "../services/movieService";
import IsFavourite from "./isFavourite";

class Movies extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		const { data: movies } = await movieService.getMovies();
		this.setState({ movies });
	}

	handleIconChande = (movie) => {
		//console.log(movie.isFavourite);
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		//console.log(index);
		//console.log(movies[index].isFavourite);
		movies[index].isFavourite = !movies[index].isFavourite;
		//console.log(movies[index].isFavourite);
		//movieService.saveMovie(movie._id, )
		this.setState({ movies });
		movieService.saveMovie(movie);
	};

	render() {
		const { movies } = this.state;
		return (
			<div>
				{movies.map((movie) => (
					<div className='movie-container' key={movie._id}>
						<NavLink to={`movies/${movie._id}`}>
							<p>{movie.title}</p>
							<img src={movie.imgUrl} />
							<p>{movie.year}</p>
						</NavLink>
						<IsFavourite
							isFavourite={movie.isFavourite}
							onIconChange={() => this.handleIconChande(movie)}
						/>
					</div>
				))}
			</div>
		);
	}
}

export default Movies;
