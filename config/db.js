import { createConnection } from "mysql2";

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "king@827742",
  database: "mcell",
  timezone: '+05:30'
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("✅ MySQL Connected!");
});

export default connection;
