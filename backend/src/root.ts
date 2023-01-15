import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Args, User, UserUpdate, Ticket, TicketUpdate } from "./types";

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

async function getTicketSummary() {
  const ticket = await prisma.ticket.findMany({
    include: {
      author: true,
    },
  });
  console.log(ticket);
  return ticket;
}

async function getTicket(id: number) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: id,
    },
    include: {
      notes: true,
      author: true,
    },
  });
  return ticket;
}

async function createTicket(data: Ticket) {
  let cleanData = JSON.parse(JSON.stringify(data))["data"];
  const createTicket = await prisma.ticket.create({
    data: cleanData,
  });
  return createTicket;
}

async function updateTicket(id: number, data: Ticket) {
  let cleanData = JSON.parse(JSON.stringify(data));
  const updatedTicket = await prisma.ticket.update({
    data: cleanData,
    where: {
      id,
    },
  });
  return updatedTicket;
}

async function deleteTicket(id: number) {
  const deleteTicket = await prisma.ticket.delete({
    where: {
      id,
    },
  });
  return deleteTicket;
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
  getTicketSummary: () => {
    return getTicketSummary();
  },
  // get a ticket:
  getTicket: (args: Args) => {
    return getTicket(args.id);
  },
  //create a ticket:
  createTicket: async (data: Ticket) => {
    return createTicket(data);
  },
  //update a ticket
  updateTicket: (input: TicketUpdate) => {
    return updateTicket(input.id, input.data);
  },
  // delete a specific ticket:
  deleteTicket: (args: Args) => {
    return deleteTicket(args.id);
  },
};
