var { buildSchema } = require("graphql");

export var schema = buildSchema(`

type Ticket {
    id: ID!
    createdAt: String
    updatedAt: String
    title: String
    problem: String
    solved: Boolean
    status: String
    viewCount: Int
    authorId: Int
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

  type Query {
    getUsers: [User]
    getUser (id: Int!): User
  }
`);
