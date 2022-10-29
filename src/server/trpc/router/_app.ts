// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { followRouter } from "./follow";
import { messageRouter } from "./message";

export const appRouter = router({
  auth: authRouter,
  message: messageRouter,
  follow: followRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
