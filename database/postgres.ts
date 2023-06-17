import { Pool } from "node-postgres";
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "123",
  port: 5432,
});
const connect = async () => {
  try {
    await pool.connect();
    console.log("DB connect");
  } catch (err) {
    console.log(err);
  }
};
connect();
