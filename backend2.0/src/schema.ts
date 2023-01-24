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
  }

`;

const data = [
  {
    id: 1,
    first_name: "Vic",
    last_name: "Krates",
    email: "vkrates0@taobao.com",
    gender: "Male",
    avatar: "https://robohash.org/enimoditquia.png?size=50x50&set=set1",
    company_name: "Smith, Zemlak and Bergnaum",
    phone: "+1 864 896 1112",
    time_zone: "America/New_York",
    lat: 34.7671945,
    long: -82.3777335,
    tickets: [
      {
        id: 1,
        title: "CUCM Crashing",
        summary: "Our CUCM keeps rebooting after a recent upgrade",
        solved: false,
        status: "NEW",
        createdAt: 1674476046,
        updatedAt: 1674476046,
      },
      {
        id: 2,
        title: "Need Help Sending SMS in Python",
        summary:
          "We're looking to create a script to send SMS messages using Python",
        solved: true,
        status: "NEW",
        createdAt: 1674476046,
        updatedAt: 1674476046,
      },
      {
        id: 3,
        title: "ASA blocking traffic",
        summary: "Users are unable to get out to the internet",
        solved: false,
        status: "UPDATED",
        createdAt: 1674476046,
        updatedAt: 1674476046,
      },
    ],
  },
  {
    id: 2,
    first_name: "Maurice",
    last_name: "Cheston",
    email: "mcheston1@nih.gov",
    gender: "Male",
    avatar:
      "https://robohash.org/consecteturcumqueiste.png?size=50x50&set=set1",
    company_name: "Metz-Kreiger",
    phone: "+970 450 516 9505",
    time_zone: "Asia/Hebron",
    lat: 31.945399,
    long: 35.072502,
    tickets: [
      {
        id: 4,
        title: "VPN Flapping",
        summary: "Unable to get VPN tunnel working",
        solved: false,
        status: "NEW",
        createdAt: 1674476046,
        updatedAt: 1674476046,
      },
      {
        id: 5,
        title: "Studio Execution stuck",
        summary: "Not assistance troubleshooting Studio executions",
        solved: true,
        status: "NEW",
        createdAt: 1674476046,
        updatedAt: 1674476046,
      },
      {
        id: 6,
        title: "SMS via Node.JS Helper Library",
        summary: "Please share documentation on how to send SMS via Node",
        solved: false,
        status: "UPDATED",
        createdAt: 1674476046,
        updatedAt: 1674476046,
      },
    ],
  },
];

export const resolvers = {
  Query: {
    users: () => data,
  },
};
