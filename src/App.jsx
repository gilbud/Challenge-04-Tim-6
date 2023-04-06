import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeService from "./pages/HomeService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
