import ContactService from "./contacts.service.js";

class ContactsController {
  // TODO : Penser à l'injection de dépendances
  constructor() {
    this.contactsService = new ContactService();
  }

  findAll = async (_, res) => {
    const contacts = await this.contactsService.findAll();
    res.send(contacts);
  };

  createOne = async ({ body }, res) => {
    if (await this.contactsService.createOne(body)) {
      return res.sendStatus(201);
    }
    res.send(500).send("Erreur lors de la création du contact");
  };

  findOne = async ({ params: { id } }, res) => {
    try {
      const contact = await this.contactsService.findOne(id);
      res.send(contact);
    } catch (error) {
      res.status(404).send(error.message);
      console.log(error.message);
    }
  };

  updateOne = async ({ params: { id }, body }, res) => {
    try {
      await this.contactsService.updateOne(id, body);
      res.send("contact mis à jour avec succès");
    } catch (error) {
      // TODO : Not all cases should be 404, and for repo errors, i should
      //  Add an object with an attribute for testing
      res.status(404).send(error.message);
      console.log(error.message);
    }
  };

  deleteOne = async ({ params: { id } }, res) => {
    try {
      await this.contactsService.deleteOne(id);
      res.send("contact supprimé avec succès");
    } catch (error) {
      res.status(404).send(error.message);
      console.log(error.message);
    }
  };
}

export default ContactsController;
