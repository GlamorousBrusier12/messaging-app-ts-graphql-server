import { builder } from "../builder";
import { prisma } from "../db";
builder.prismaObject("Message", {
  fields: (t) => ({
    id: t.exposeID("id"),
    body: t.exposeString("body"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});

// builder.queryField("message", (t) =>
//   t.prismaField({
//     type: ["Message"],
//     args: {
//       id: t.arg.id(),
//     },
//     resolve: async (query, root:{id: number}, cxt, info) => {
//       return prisma.message.findUnique({
//         where: {
//           id: root.id,
//         },
//       });
//     },
//   })
// );
