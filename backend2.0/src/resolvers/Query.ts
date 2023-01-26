import { users, tickets } from "./../db.js";

export const Query = {
  users: () => users,
  tickets: () => tickets,
  userTickets: (parent, args, ctx) => {
    return tickets.filter((ticket) => {
      return ticket.user === args.id;
    });
  },
};
