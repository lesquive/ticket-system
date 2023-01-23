export const typeDefs = `#graphql

  # This "Ticket" type defines the queryable fields for every ticket in our data source.
  type Ticket {
    id: ID!
    createdAt: Int
    updatedAt: Int
    title: String
    summary: String
    solved: Boolean
    status: String
}


  #Queries and Mutations
  type Query {
    tickets: [Ticket]
  }

`;

const tickets = [
  {
    id: 1,
    title: "CUCM Crashing",
    summary: "Our CUCM keeps rebooting after a recent upgrade",
    solved: false,
    status: "Open",
    createdAt: 1674476046,
    updatedAt: 1674476046,
  },
  {
    id: 2,
    title: "Need Help Sending SMS in Python",
    summary:
      "We're looking to create a script to send SMS messages using Python",
    solved: true,
    status: "close",
    createdAt: 1674476046,
    updatedAt: 1674476046,
  },
  {
    id: 3,
    title: "ASA blocking traffic",
    summary: "Users are unable to get out to the internet",
    solved: false,
    status: "customer pending",
    createdAt: 1674476046,
    updatedAt: 1674476046,
  },
];

export const resolvers = {
  Query: {
    tickets: () => tickets,
  },
};
