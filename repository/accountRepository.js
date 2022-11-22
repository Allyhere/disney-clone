import { gql } from "graphql-request";
const accountQuery = gql`
  query {
    account(where: { id: "cla1peqgy102p0blyfrk07bfa" }) {
      username
      avatar {
        url
      }
    }
  }
`;

export { accountQuery };
