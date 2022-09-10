import { nanoid } from "nanoid";
import { JsonUtils } from "../utils/json-utils.js";

class ContactsRepository {
  constructor() {
    this.filname = "./databases.json";
    this.collection = "contacts";
  }
  async findAll() {
    const contacts = (await JsonUtils.readJson(this.filname))[this.collection];
    return contacts;
  }
  async findOne(id) {
    return (await this.findAll())[id];
  }
  async createOne(contactData) {
    const contacts = await this.findAll();
    const id = nanoid();
    contacts[id] = { id, ...contactData };
    if (await JsonUtils.writeJson(this.filname, contacts, this.collection)) {
      return true;
    }
    return false;
  }
  async updateOne(id, contactData) {
    const contacts = await this.findAll();
    contacts[id] = { ...contacts[id], ...contactData };
    if (await JsonUtils.writeJson(this.filname, contacts, this.collection)) {
      return true;
    }
    return false;
  }
  async deleteOne(id) {
    const contacts = await this.findAll();
    delete contacts[id];
    if (await JsonUtils.writeJson(this.filname, contacts, this.collection)) {
      return true;
    }
    return false;
  }
}

export default ContactsRepository;
