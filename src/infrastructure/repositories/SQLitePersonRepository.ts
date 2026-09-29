import { Person } from "../../domain/entities/Person";
import { PersonRepository } from "../../domain/repositories/PersonRepository";
import { getDatabase } from "../database/database";

export class SQLitePersonRepository implements PersonRepository {

  async create(person: Person): Promise<number> {

    const db = await getDatabase();

    const result = await db.runAsync(
      `
      INSERT INTO persons(name, phone)
      VALUES (?, ?)
      `,
      [
        person.name,
        person.phone
      ]
    );

    return result.lastInsertRowId;
  }
}