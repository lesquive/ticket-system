import { gql } from "@apollo/client";

export const getTicketSummary = gql`
  {
    tickets {
      id
      createdAt
      status
      title
      updatedAt
      user {
        avatar
        last_name
        first_name
      }
    }
  }
`;
