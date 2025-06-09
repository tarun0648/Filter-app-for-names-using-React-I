import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Name Search App</h1>
      <nav>
        <Link to="/search">Search Names</Link> |{" "}
        <Link to="/history">View Search History</Link>
      </nav>
    </div>
  );
}

export default Home;
