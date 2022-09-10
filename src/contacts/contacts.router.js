import express from "express";
import ContactsController from "./contacts.controller.js";

const contactsController = new ContactsController();

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.findAll);
contactsRouter.post("/", contactsController.createOne);
contactsRouter.get("/:id", contactsController.findOne);
contactsRouter.patch("/:id", contactsController.updateOne);
contactsRouter.delete("/:id", contactsController.deleteOne);

export default contactsRouter;
