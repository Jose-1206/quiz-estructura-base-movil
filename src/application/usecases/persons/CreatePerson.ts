import { PersonRepository } from "../../../domain/repositories/PersonRepository";

export class CreatePerson {

  constructor(
    private repository: PersonRepository
  ) {}

  async execute(
    name: string,
    phone: string
  ): Promise<number> {

    if (!name.trim() || !phone.trim()) {
      throw new Error(
        "Name and phone are required"
      );
    }

    return this.repository.create({
      name: name.trim(),
      phone: phone.trim()
    });
  }
}