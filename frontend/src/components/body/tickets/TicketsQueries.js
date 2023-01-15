import { gql } from "@apollo/client";

export const getTicketSummary = gql`
  {
    getTicketSummary {
      id
      createdAt
      updatedAt
      title
      status
      author {
        first_name
        last_name
        avatar
      }
    }
  }
`;
