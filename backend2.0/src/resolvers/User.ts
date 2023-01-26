import { tickets } from "../db.js";

export const User = {
  tickets: (parent, args, ctx) => {
    return tickets.filter((ticket) => {
      return ticket.user === parent.id;
    });
  },
};
