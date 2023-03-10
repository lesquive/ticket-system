var { buildSchema } = require("graphql");

export var schema = buildSchema(`

type Note {
    id: ID!
    subject: String
    body: String 
    ticket: Ticket
    author: User
    authorId: Int
    noteType: String
    ticketId: Int
}

type Ticket {
    id: ID!
    createdAt: String
    updatedAt: String
    title: String
    problem: String
    solved: Boolean
    status: String
    viewCount: Int
    author: User
    notes: [Note]
}

type User {
    id: ID!
    first_name: String
    last_name: String
    email: String!
    gender: String
    avatar: String
    company_name: String
    phone: String
    time_zone: String
    lat: Float
    long: Float
    tickets: [Ticket]
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    first_name: String
    last_name: String
    email: String!
    gender: String
    avatar: String
    company_name: String
    phone: String
    time_zone: String
    lat: Float
    long: Float
  }

  input TicketInput {
    createdAt: String
    updatedAt: String
    title: String
    problem: String
    solved: Boolean
    status: String
    viewCount: Int
    author: Int
}

  type Query {
    getUsers: [User]
    getUser (id: Int!): User
    getTicketSummary: [Ticket]
    getTicket (id: Int!): Ticket
  }

  type Mutation {
    deleteUser (email: String!): User
    updateUser (email: String!, data: UserInput): User
    createUser (data: UserInput): User
    createTicket (data: TicketInput): Ticket
    updateTicket (id: Int!, data: TicketInput): Ticket
    deleteTicket (id: Int!): Ticket
  }

`);
