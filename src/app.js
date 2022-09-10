import express from "express";
import cors from "cors";
import { CONTACT_BASE_URI, PORT } from "./globals.js";
import contactsRouter from "./contacts/contacts.router.js";

export default function bootstrap(app) {
  app.use(cors());
  app.use(express.json());
  app.use(CONTACT_BASE_URI, contactsRouter);
  app.get("*", (_, res) => {
    res.sendStatus(404);
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} 🚀🚀`);
  });
}
