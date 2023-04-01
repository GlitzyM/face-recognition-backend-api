import express from "express";
import cors from "cors";
import knex from "knex";
import bcrypt from "bcrypt";
import handleRegister from "./Controllers/register.js";
import handleSignin from "./Controllers/signin.js";
import handleProfileGet from "./Controllers/profile.js";
import handleEntries from "./Controllers/rank.js";

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "itte!FAQ2",
    database: "Face-Recognition",
  },
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});

//Signin Endpoint
app.post("/signin", (req, res) => {
  handleSignin(req, res, db, bcrypt);
});

//Register Endpoint --> Adding users
app.post("/register", (req, res) => {
  handleRegister(req, res, db, bcrypt);
});

//Profile endpoint
app.get("/profile/:id", (req, res) => {
  handleProfileGet(req, res, db);
});

//Rank Endpoint
app.put("/rank", (req, res) => {
  handleEntries(req, res, db);
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
