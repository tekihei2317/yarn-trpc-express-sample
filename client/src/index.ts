import { client } from "./trpc";

async function main() {
  const [user1, user2] = await Promise.all([
    client.createUser.mutate({ name: "alice" }),
    client.createUser.mutate({ name: "alice" }),
  ]);
  console.log({ user1, user2 });

  const users = await client.users.query();
  console.log({ users });
}

main();
