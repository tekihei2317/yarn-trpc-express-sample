import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
import cors from "cors";

const app = express();

// TODO:
const previewAppOrigin = /^https:\/\/.+\.amplifyapp\.com$/;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      previewAppOrigin,
    ],
  })
);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log(`server is litening at port 3000.`));
