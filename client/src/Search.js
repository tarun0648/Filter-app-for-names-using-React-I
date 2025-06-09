import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

function Search() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        const firstNames = data.users.map(user => user.firstName);
        setNames(firstNames);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Names</h2>
      <SearchBar names={names} />
    </div>
  );
}

export default Search;
