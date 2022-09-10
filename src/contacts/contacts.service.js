import ContactsRepository from "./contact.repository.js";

class ContactService {
  // TODO : Penser à l'injection de dépendances
  constructor() {
    this.contactsRepository = new ContactsRepository();
  }

  findAll = async () => {
    return await this.contactsRepository.findAll();
  };

  createOne = (contactData) => {
    return this.contactsRepository.createOne(contactData);
  };

  findOne = async (id) => {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) throw new Error(`Cannot find contact with id ${id}`);
    return contact;
  };

  updateOne = async (id, contactData) => {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) throw new Error(`Cannot find contact with id ${id}`);
    return this.contactsRepository.updateOne(id, contactData);
  };

  deleteOne = async (id) => {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) throw new Error(`Cannot find contact with id ${id}`);
    return this.contactsRepository.deleteOne(id);
  };
}

export default ContactService;
