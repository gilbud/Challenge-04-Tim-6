import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const movieUrl = "https://api.themoviedb.org/3/movie/popular?page=1";
const apiKey = "api_key=6d2181c8a2dc5ea5d5720a89bf1f2b66";

function HomeService() {
  //List-Movie
  const getMovies = async () => {
    const movie = await axios.get(`${movieUrl}&${apiKey}`);
    return movie.data.results;
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((result) => {
      setMovies(result);
      console.log(movies);
    });
  });

  //Search
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault;

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <Container>
      <div className="search-form">
        <form onSubmit={handleSubmit} className="text-center my-4">
          <input
            type="text"
            placeholder="Cari Film...."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
      <div className="container">
        <div className="movies-container">
          {movies && movies?.length === 0 && (
            <h3 className="text-center">Loading....</h3>
          )}
          {movies &&
            movies?.length > 0 &&
            movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </Container>
  );
}

export default HomeService;
