import { users } from "./../db.js";

export const Ticket = {
  user: (parent, args, ctx) => {
    return users.find((user) => {
      return user.id === parent.user;
    });
  },
};
