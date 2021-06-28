import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
class ListUsersService {
  async execute() {
    const complimentsRepositories = getCustomRepository(UsersRepositories);

    const users = await complimentsRepositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };
