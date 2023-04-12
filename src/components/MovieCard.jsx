import React from "react";
const imageUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  console.log(movie.poster_path);
  return (
    <div className="movie-card">
      <div className="img-container">
        <img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          className="img-card"
        />
      </div>
      <div className="movie-title">{movie.title}</div>
      <div className="movie-date"> {movie.release_date} </div>
    </div>
  );
}

export default MovieCard;
