import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const followRouter = router({
  follow: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = input;

      const followResponse = await ctx.prisma.follow.create({
        data: {
          userId: userId,
          followerId: ctx.session.user.id,
        },
      });

      return followResponse;
    }),
  getFollowing: protectedProcedure.query(async ({ ctx }) => {
    const following = await ctx.prisma.follow.findMany({
      where: { followerId: ctx.session.user.id },
      select: { user: true },
    });

    return following;
  }),
});
