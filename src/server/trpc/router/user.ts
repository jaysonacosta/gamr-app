import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  getUserById: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { userId } = input;

      const user = await ctx.prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        throw new Error("User with given ID not found.");
      }

      return user;
    }),
});
