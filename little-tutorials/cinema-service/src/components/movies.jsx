import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
	};

	// Once the component is rendered, didMount gets called and we set the state here
	componentDidMount() {
		const genres = [{ name: "All Genres" }, ...getGenres()];

		this.setState({ movies: getMovies(), genres });
	}

	// Toggles the like buttons against each movie
	handleLike = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	// Mainly used to change the active status of the currently selected page
	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleDelete = (movie) => {
		const movies = this.state.movies.filter((m) => m._id !== movie._id);
		this.setState({ movies });
	};

	handleGenreSelect = (genre) => {
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, selectedGenre, movies } = this.state;

		if (count === 0) return <p>There are no movies in the database.</p>;

		const filtered =
			selectedGenre && selectedGenre._id
				? movies.filter((m) => m.genre._id === selectedGenre._id)
				: movies;

		const moviesPerPage = paginate(filtered, currentPage, pageSize);

		return (
			<div className="row">
				<div className="col-2">
					<ListGroup
						items={this.state.genres}
						onItemSelect={this.handleGenreSelect}
						selectedItem={this.state.selectedGenre}
					/>
				</div>
				<div className="col">
					<p className="p-2">
						Showing {filtered.length} movies in the database.
					</p>
					<MoviesTable
						movies={movies}
						onLike={this.handleLike}
						onDelete={this.handleDelete}
					/>
					<Pagination
						itemsCount={filtered.length}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					/>
				</div>
			</div>
		);
	}
}

export default Movies;
