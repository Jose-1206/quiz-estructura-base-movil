import { CreateUser } from "../application/usecases/users/CreateUser";
import { CreateProduct } from "../application/usecases/products/CreateProduct";
import { CreatePerson } from "../application/usecases/persons/CreatePerson";

import { SQLiteUserRepository } from "../infrastructure/repositories/SQLiteUserRepository";
import { SQLiteProductRepository } from "../infrastructure/repositories/SQLiteProductRepository";
import { SQLitePersonRepository } from "../infrastructure/repositories/SQLitePersonRepository";


const userRepository = new SQLiteUserRepository();
const productRepository = new SQLiteProductRepository();
const personRepository = new SQLitePersonRepository();


export const createUser =
  new CreateUser(userRepository);


export const createProduct =
  new CreateProduct(productRepository);


export const createPerson =
  new CreatePerson(personRepository);