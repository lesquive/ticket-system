import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Args } from "./types";

async function getUsers() {
  const users = await prisma.user.findMany({
    include: {
      tickets: true,
    },
  });
  return users;
}

async function getUser(id: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      tickets: true,
    },
  });
  return user;
}

export var root = {
  // get all users:
  getUsers: () => {
    return getUsers();
  },
  // get a specific user:
  getUser: (args: Args) => {
    return getUser(args.id);
  },
};
