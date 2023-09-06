import React, { useEffect, useState } from "react";
import { client } from "./trpc";

type User = { id: number; name: string };

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const reloadUser = async () => {
    const u = await client.users.query();
    setUsers(u);
  };

  useEffect(() => {
    reloadUser();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    type Target = { username: { value: string } };
    const username = (e.target as unknown as Target).username.value;
    if (username === "") {
      return;
    }

    await client.createUser.mutate({ name: username });
    await reloadUser();
  };

  return (
    <>
      <h1>Sample App</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" />
          <button type="submit">create user</button>
        </form>
        <div style={{ marginTop: "1rem" }}>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
