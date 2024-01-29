import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const addUser = async (user: User) => {
  console.log("Inserting a new user into the database...");
  await AppDataSource.manager.save(user);
  console.log("Saved a new user with id: " + user.id);
  console.log("Loading users from the database...");
  const users = await AppDataSource.manager.find(User);
  console.log("Loaded users: ", users);
  console.log(
    "Here you can setup and run express / fastify / any other framework."
  );
};

const firstUser = new User();
firstUser.firstName = "Timber";
firstUser.lastName = "Saw";
firstUser.age = 25;


AppDataSource.initialize()
  .then(async () => {
    await addUser(firstUser);
  })
  .catch((error) => console.log(error));
