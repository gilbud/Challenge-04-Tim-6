import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "api_key=6d2181c8a2dc5ea5d5720a89bf1f2b66";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      const response = await axios.get(url);
      const { data } = response;

      setMovies(data.results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      getSearchedMovies(searchWithQueryURL);
    }
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Result search for: <span>{query}</span>
      </h2>
      <div className="movies-container">
        {movies && movies?.length === 0 && (
          <h3 className="text-center">Loading....</h3>
        )}
        {movies &&
          movies?.length > 0 &&
          movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
