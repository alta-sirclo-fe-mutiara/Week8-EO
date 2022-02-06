import { gql } from "@apollo/client";

export const MUTATION_REGISTER = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      name
    }
  }
`;

export const QUERY_USER = gql`
  query ($email: String!, $password: String!) {
    authLogin(email: $email, password: $password) {
      message
      name
      email
      token
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  query {
    events {
      id
      name
      promotor
      categoryId
      datetime
      photo
    }
  }
`;

export const QUERY_SEARCH_EVENT = gql`
  query ($keyword: String!) {
    events(keyword: $keyword, limit: 10, offset: 0) {
      id
      name
      userId
      userName
      promotor
      categoryId
      categoryName
      datetime
      location
      description
      photo
    }
  }
`;

export const QUERY_GET_BY_ID = gql`
  query ($id: Int!) {
    eventsByID(id: $id) {
      id
      name
      userId
      userName
      promotor
      categoryName
      datetime
      location
      description
      photo
    }
  }
`;

export const QUERY_GET_PARTICIPANTS = gql`
  query ($id: Int!) {
    participants(eventid: $id) {
      id
      name
      email
      phoneNumber
      avatar
    }
  }
`;

export const MUTATION_CREATE_EVENT = gql`
  mutation (
    $name: String!
    $userId: Int!
    $promotor: String!
    $categoryId: Int!
    $datetime: String!
    $location: String!
    $description: String!
    $photo: String!
  ) {
    createEvent(
      input: {
        name: $name
        userId: $userId
        promotor: $promotor
        categoryId: $categoryId
        datetime: $datetime
        location: $location
        description: $description
        photo: $photo
      }
    ) {
      id
      name
    }
  }
`;

export const MUTATION_JOIN_EVENT = gql`
  mutation ($eventid: Int!) {
    joinEvent(eventid: $eventid) {
      id
    }
  }
`;
