import express from "express";
import { config, configDotenv } from "dotenv";
import session from "express-session";
import { databaseConnection } from "./Database/database.js";
import cors from "cors";
import { router } from "./Routes/MessageRoutes.js";
configDotenv();

export const app = express();
export const PORT = process.env.PORT || 7800;
export const MONGO_URI = process.env.MONGO_URI;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 24 * 60 * 60,
      sameSite: "lax",
      httpOnly: true,
    },
  }),
);

// Custom Middleware

app.use("/message", router);

await databaseConnection();
