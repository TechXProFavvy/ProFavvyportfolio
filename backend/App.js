import express from "express";
import { config } from "dotenv";
import session from "express-session";

export const app = express();
export const PORT = process.env.PORT || 7800;

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    Credential: true,
  }),
);
app.use(
  session({
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 24 * 60 * 60,
      sameSite: "lax",
      httpOnly: true,
    },
  }),
);
