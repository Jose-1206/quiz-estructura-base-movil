import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { getDatabase } from "../database/database";

export class SQLiteUserRepository implements UserRepository {

  async create(user: User): Promise<number> {

    const db = await getDatabase();

    const result = await db.runAsync(
      `
      INSERT INTO users(name, email)
      VALUES (?, ?)
      `,
      [
        user.name,
        user.email
      ]
    );

    return result.lastInsertRowId;
  }
}