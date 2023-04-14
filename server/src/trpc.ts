import { initTRPC } from "@trpc/server";
import { z } from "zod";
export const t = initTRPC.create();

export const appRouter = t.router({
  user: t.procedure.input(z.string()).query((req) => {
    return { id: req.input, name: "tekihei2317" };
  }),
  hello: t.procedure.query(() => "Hello, world"),
});

export type AppRouter = typeof appRouter;
