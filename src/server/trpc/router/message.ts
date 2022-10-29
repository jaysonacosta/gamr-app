import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const messageRouter = router({
  updateMessage: protectedProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { text } = input;

      const messageUpdate = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          message: text,
        },
      });

      return messageUpdate;
    }),
  getMessage: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });

    let message;
    user ? (message = user.message) : null;

    return message;
  }),
});
