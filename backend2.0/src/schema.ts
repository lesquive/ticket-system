export const typeDefs = `#graphql

enum AllowedStatus {
  PENDING
  UPDATED
  NEW
  SOLVED
}

  # This "Ticket" type defines the queryable fields for every ticket in our data source.
  type Ticket {
    id: ID!
    createdAt: Int
    updatedAt: Int
    title: String
    summary: String
    solved: Boolean
    status: AllowedStatus
    user: User
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


  #Queries and Mutations
  type Query {
    tickets: [Ticket]
    users: [User]
    userTickets(id: ID!): [Ticket]
  }

  type Mutation {
    addUser(
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
      createdAt: String
      updatedAt: String
    ): User
    addTicket(
      createdAt: Int
      updatedAt: Int
      title: String
      summary: String
      solved: Boolean
      status: AllowedStatus
      user: String!
    ): Ticket
    removeUser(id: ID!): Boolean!
    removeTicket(id: ID!): Boolean!
  }

`;
