import React from "react";
import { Link } from "react-router-dom";
const imageUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, showLink = true }) {
  console.log(movie.poster_path);
  return (
    <div className="movie-card text-center">
      <div className="img-container">
        <img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          className="img-card"
        />
      </div>
      <div className="movie-title">{movie.title}</div>
      <div className="movie-date"> {movie.release_date}</div>
      {showLink && (
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">
          Details
        </Link>
      )}
    </div>
  );
}

export default MovieCard;
