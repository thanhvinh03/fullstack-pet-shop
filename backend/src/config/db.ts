import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "petshop",
  password: "password",
  port: 5432,
});

export default pool;
