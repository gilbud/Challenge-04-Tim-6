import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function HomeService() {
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
      <form onSubmit={handleSubmit} className="text-center mt-5">
        <input
          type="text"
          placeholder="Cari Film...."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
}

export default HomeService;
