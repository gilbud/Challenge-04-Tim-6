import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const imageUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = "api_key=6d2181c8a2dc5ea5d5720a89bf1f2b66";
const movieUrl = "https://api.themoviedb.org/3/movie";

function Movie() {
const { id } = useParams();
const [movie, setMovie] = useState({});

useEffect(() => {
const getMovie = async () => {
const response = await axios.get(`${movieUrl}/${id}?${apiKey}`);
setMovie(response.data);
};
getMovie();
}, [id]);

return (
    <div className="container">
    <div className="row">
    <div className="col-md-4">
        <img
        src={imageUrl + movie.poster_path}
        alt={movie.title}
        className="img-fluid"
        />
    </div>
    <div className="col-md-8">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}/10</p>
    </div>
    </div>
    </div>
);
}

export default Movie;