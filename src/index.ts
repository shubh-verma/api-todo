import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const newUser = async (user) => {
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

const fUser = new User();
fUser.firstName = "Timber";
fUser.lastName = "Saw";
fUser.age = 25;

AppDataSource.initialize()
  .then(async () => {
    await newUser(fUser);
  })
  .catch((error) => console.log(error));
