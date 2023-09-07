import { initTRPC } from "@trpc/server";
import { z } from "zod";
export const t = initTRPC.create();

type User = { id: number; name: string };
const users: User[] = [];
let id = 1;

export const appRouter = t.router({
  user: t.procedure.input(z.string()).query((req) => {
    return { id: req.input, name: "tekihei2317" };
  }),
  // users: t.procedure.query(() => users),
  users: t.procedure.query(() => [{ id: 1, name: "tekihei2318" }]),
  createUser: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
      const newUser: User = { id: id++, name: req.input.name };
      users.push(newUser);

      return newUser;
    }),
});

export type AppRouter = typeof appRouter;
