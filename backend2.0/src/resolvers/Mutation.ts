import { v4 } from "uuid";
import { users } from "./../db.js";
import { tickets } from "../db.js";

export const Mutation = {
  //Add User
  addUser: (
    parent,
    {
      first_name,
      last_name,
      email,
      gender,
      avatar,
      company_name,
      phone,
      time_zone,
      lat,
      long,
      createdAt,
      updatedAt,
    },
    ctx
  ) => {
    let newUser = {
      id: v4(),
      first_name,
      last_name,
      email,
      gender,
      avatar,
      company_name,
      phone,
      time_zone,
      lat,
      long,
      createdAt,
      updatedAt,
    };
    users.push(newUser);
    return newUser;
  },
  //Add Ticket
  addTicket: (
    parent,
    { title, summary, solved, status, user, createdAt, updatedAt },
    ctx
  ) => {
    let newTicket = {
      id: v4(),
      title,
      summary,
      solved,
      status,
      user,
      createdAt,
      updatedAt,
    };
    tickets.push(newTicket);
    return newTicket;
  },
};
