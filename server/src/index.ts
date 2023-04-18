import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log(`server is litening at port 3000.`));
