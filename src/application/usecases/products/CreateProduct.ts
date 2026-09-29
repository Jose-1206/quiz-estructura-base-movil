import { ProductRepository } from "../../../domain/repositories/ProductRepository";

export class CreateProduct {

  constructor(
    private repository: ProductRepository
  ) {}

  async execute(
    name: string,
    price: number
  ): Promise<number> {

    if (!name.trim()) {
      throw new Error(
        "Product name is required"
      );
    }

    if (price <= 0) {
      throw new Error(
        "Price must be greater than zero"
      );
    }

    return this.repository.create({
      name: name.trim(),
      price
    });
  }
}