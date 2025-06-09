import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/history")
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(err => console.error("Failed to fetch history:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search History</h2>
      <ul>
        {history.map((entry, idx) => (
          <li key={idx}>{entry.name} - {new Date(entry.searched_at).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
