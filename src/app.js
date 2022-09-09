import express from "express";
import cors from "cors";
import { PORT } from "./globals.js";

export default function bootstrap(app) {
  app.use(cors());
  app.use(express.json());
  app.get("*", (_, res) => {
    res.sendStatus(404);
  });
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} 🚀🚀`);
  });
}
