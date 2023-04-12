import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeService from "./pages/HomeService";
import Search from "./pages/Search";
import NavbarMovie from "./components/NavbarMovie";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <NavbarMovie />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeService />} />
          <Route path="search" element={<Search />} />
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
