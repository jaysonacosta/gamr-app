// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { followRouter } from "./follow";
import { statusRouter } from "./status";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  status: statusRouter,
  follow: followRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
