import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Args, User, UserUpdate } from "./types";

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
  return deleteUser;
}

async function updateUser(email: string, data: User) {
  let cleanData = JSON.parse(JSON.stringify(data));
  const updatedUser = await prisma.user.update({
    data: cleanData,
    where: {
      email,
    },
  });
  return updatedUser;
}

async function createUser(data: User) {
  let cleanData = JSON.parse(JSON.stringify(data))["data"];
  const createUser = await prisma.user.create({
    data: cleanData,
  });
  return createUser;
}

async function getTickets() {
  const ticket = await prisma.ticket.findMany({
    include: {
      notes: true,
    },
  });
  return ticket;
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
  updateUser: (input: UserUpdate) => {
    return updateUser(input.email, input.data);
  },
  // create a specific user:
  createUser: async (data: User) => {
    return createUser(data);
  },

  // get all tickets:
  getTickets: () => {
    return getTickets();
  },
};
