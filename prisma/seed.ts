import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records

  await prisma.user.create({
    data: {
      name: "Naveen Kumar",
      messages: {
        create: [
          {
            body: "aaarseeeebeeeeee!",
          },
          {
            body: "ee sala cup namde!",
          },
          {
            body: "virat kohli kinguuuu🔥❤️‍🔥",
          },
          {
            body: "I love the concept of 'the one' in how I met your mother!",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Rohit Sharma",
      messages: {
        create: [
          {
            body: "I don't just walk out for my team. I walk out for my country.",
          },
          {
            body: "Records and numbers mean nothing to me. It's all about contributing to the team's success.",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Virat Kohli",
      messages: {
        create: [
          {
            body: "You don't play for revenge. You play for respect and pride.",
          },
          {
            body: "I love playing under pressure. In fact, if there's no pressure, then I'm not in the perfect zone.",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Ravindra Jadeja",
      messages: {
        create: [
          {
            body: "The bat might fail, but never the heart.",
          },
          {
            body: "I am not afraid to take risks. If you don't take risks, you can't create magic.",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...🌱");
});
