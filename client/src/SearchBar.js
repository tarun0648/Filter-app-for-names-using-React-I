import { useState } from "react";

function SearchBar({ names }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);

    if (input === "") {
      setSuggestions([]);
      return;
    }

    const filtered = names.filter(name =>
      name.toLowerCase().startsWith(input)
    );
    setSuggestions(filtered);

    if (filtered.length > 0) {
      try {
        await fetch("http://localhost:5000/api/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: input }),
        });
      } catch (err) {
        console.error("Error saving search:", err);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type a name..."
        value={query}
        onChange={handleChange}
        style={{ padding: "8px", width: "300px" }}
      />
      {suggestions.length > 0 && (
        <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: 10 }}>
          {suggestions.map((name, idx) => (
            <li key={idx} style={{ padding: "4px 0" }}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
