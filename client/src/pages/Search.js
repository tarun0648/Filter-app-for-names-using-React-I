import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

function Search() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/names")
      .then(res => res.json())
      .then(data => setNames(data))
      .catch(err => console.error("Failed to fetch names:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Filter App</h2>
      <SearchBar names={names} />
    </div>
  );
}

export default Search;
