import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const statusRouter = router({
  updateStatus: protectedProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { text } = input;

      const statusUpdate = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          status: text,
        },
      });

      return statusUpdate;
    }),
  getStatus: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    return user.status;
  }),
});
