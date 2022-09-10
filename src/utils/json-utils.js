import { readFile, writeFile } from "fs/promises";

export class JsonUtils {
  // TODO : Error handling on file reading
  static async readJson(fileName) {
    const rawJson = await readFile(fileName, "utf-8");
    return JSON.parse(rawJson);
  }

  static async writeJson(fileName, data, collection) {
    // TODO : Error handling on file opening
    const parsedJson = await JsonUtils.readJson(fileName);
    parsedJson[collection] = data;
    await writeFile(fileName, JSON.stringify(parsedJson));
    return true;
  }
}
