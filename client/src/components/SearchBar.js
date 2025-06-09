import { useState } from "react";

function SearchBar({ names }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    setMessage("");

    if (input.trim() !== "") {
      const filtered = names.filter(name =>
        name.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]); 
    }
  };

  const handleSubmit = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    const nameExists = names.some(
      name => name.toLowerCase() === trimmedQuery.toLowerCase()
    );

    if (!nameExists) {
      setMessage(`Name "${trimmedQuery}" not found in database`);
      return;
    }

    try {
      await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedQuery }),
      });
      setMessage(`Search submitted: ${trimmedQuery}`);
      setQuery("");
      setSuggestions([]);
    } catch (err) {
      console.error("Error saving search:", err);
      setMessage("Failed to save search");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type a name..."
        value={query}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          marginLeft: "10px",
          padding: "10px 15px",
          backgroundColor: "#0288d1",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {message && (
        <p style={{ marginTop: "10px", color: message.includes("not") ? "red" : "green" }}>
          {message}
        </p>
      )}

      {query.trim() !== "" && suggestions.length > 0 && (
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
