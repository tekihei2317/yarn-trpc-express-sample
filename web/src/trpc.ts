import type { AppRouter } from "@sample/api-schema";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${import.meta.env.VITE_API_URL}/trpc`,
    }),
  ],
});
