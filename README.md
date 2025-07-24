# Name Filter App

A full-stack web application to search/filter names from a database, record search history, and view past searches. Built with React (frontend) and Node.js/Express with MySQL (backend).

## Features

- **Search Names:** Filter names from a database as you type.
- **Auto-suggestions:** See matching names instantly as you type.
- **Search History:** Every successful search is saved and can be viewed chronologically.
- **Persistent Storage:** Names and search history are stored in a MySQL database.
- **Modern UI:** Simple, clean, and responsive interface.

## Video

https://github.com/user-attachments/assets/c0fdbe76-9088-473d-bd0d-4e5bd8ae66e7


## Project Structure

```
Filter-app-for-names-using-React-I-main/
  client/    # React frontend
  server/    # Node.js/Express backend
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MySQL](https://www.mysql.com/) server

## Database Setup

1. **Create the database and tables:**

Connect to your MySQL server and run:

```sql
CREATE DATABASE IF NOT EXISTS search_db;
USE search_db;

CREATE TABLE IF NOT EXISTS names (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS search_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. **Insert sample data:**

```sql
INSERT INTO names (name) VALUES ('Alice'), ('Bob'), ('Charlie'), ('David'), ('Eve');
```

3. **Update server credentials if needed:**

Edit `server/server.js` if your MySQL username/password/database are different:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "search_db"
});
```

## Backend Setup (server)

1. Open a terminal and navigate to the `server` directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The server will run at [http://localhost:5000](http://localhost:5000)

## Frontend Setup (client)

1. Open a new terminal and navigate to the `client` directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)

## Usage

- Go to [http://localhost:3000](http://localhost:3000) in your browser.
- Use the navigation links to search for names or view your search history.
- Type in the search bar to filter names. Select a name and click "Search" to record it in history.
- View all previous searches in the "Search History" page.

## Troubleshooting

- Ensure MySQL is running and accessible with the credentials in `server/server.js`.
- If ports 3000 or 5000 are in use, stop other services or change the ports in the code.
- For CORS issues, make sure both servers are running on localhost as described above.

## License

MIT 
