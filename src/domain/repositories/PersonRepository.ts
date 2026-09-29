import { Person } from "../entities/Person";

export interface PersonRepository {
  create(person: Person): Promise<number>;
}