import { gql } from "@apollo/client";

export const MUTATION_LOGIN = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      name
    }
  }
`;
