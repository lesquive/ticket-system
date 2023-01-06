import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Args, User } from "./types";

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

async function deleteUser(email: string) {
  const deleteUser = await prisma.user.delete({
    where: {
      email: email,
    },
  });
}

async function updateUser(email: string, data: User) {
  const updatedUser = await prisma.user.update({
    data,
    where: {
      email,
    },
  });
  return updatedUser;
}

async function createUser(data: User) {
  const createUse = await prisma.user.create({
    data,
  });
  return createUse;
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
  // delete a specific user:
  deleteUser: (args: Args) => {
    return deleteUser(args.email);
  },
  // update a specific user:
  updateUser: (args: Args, data: User) => {
    return updateUser(args.email, data);
  },
  // create a specific user:
  createUser: (data: User) => {
    return createUser(data);
  },
};
