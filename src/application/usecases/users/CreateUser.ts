import { UserRepository } from "../../../domain/repositories/UserRepository";

export class CreateUser {

  constructor(
    private repository: UserRepository
  ) {}

  async execute(
    name: string,
    email: string
  ): Promise<number> {

    if (!name.trim() || !email.trim()) {
      throw new Error(
        "Name and email are required"
      );
    }

    return this.repository.create({
      name: name.trim(),
      email: email.trim()
    });
  }
}