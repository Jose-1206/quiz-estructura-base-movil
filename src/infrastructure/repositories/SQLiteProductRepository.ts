import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { getDatabase } from "../database/database";

export class SQLiteProductRepository implements ProductRepository {

  async create(product: Product): Promise<number> {

    const db = await getDatabase();

    const result = await db.runAsync(
      `
      INSERT INTO products(name, price)
      VALUES (?, ?)
      `,
      [
        product.name,
        product.price
      ]
    );

    return result.lastInsertRowId;
  }
}