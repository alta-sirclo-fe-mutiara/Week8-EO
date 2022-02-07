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

export const QUERY_USER_BY_ID = gql`
  query ($id: Int!) {
    usersByID(id: $id) {
      name
      email
      password
      phoneNumber
      avatar
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
export const QUERY_ALL_EVENTS_LIMIT = gql`
  query ($offset: Int!) {
    events(limit: 12, offset: $offset) {
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

export const QUERY_GET_EVENT_BY_CATEGORY = gql`
  query ($categoryid: Int!) {
    events(categoryid: $categoryid, limit: 10, offset: 0) {
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

export const QUERY_GET_CATEGORY = gql`
  query {
    categories {
      id
      category
    }
  }
`;

export const QUERY_GET_COMMENTS = gql`
  query ($eventId: Int!) {
    readComment(eventid: $eventId) {
      id
      userId
      eventId
      comment
      name
      avatar
    }
  }
`;

export const QUERY_GET_USER_LIST_EVENT = gql`
  query ($userId: Int!) {
    events(userid: $userId, limit: 10, offset: 0) {
      id
      name
      promotor
      datetime
      photo
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

export const MUTATION_UPDATE_EVENT = gql`
  mutation (
    $id: Int!
    $name: String!
    $promotor: String!
    $categoryId: Int!
    $datetime: String!
    $location: String!
    $description: String!
    $photo: String!
  ) {
    updateEvent(
      id: $id
      set: {
        name: $name
        promotor: $promotor
        categoryId: $categoryId
        datetime: $datetime
        location: $location
        description: $description
        photo: $photo
      }
    ) {
      name
    }
  }
`;

export const MUTATION_UPDATE_USER = gql`
  mutation (
    $id: Int!
    $name: String!
    $email: String!
    $password: String!
    $phoneNumber: String!
    $avatar: String!
  ) {
    updateUser(
      id: $id
      set: {
        name: $name
        email: $email
        password: $password
        phoneNumber: $phoneNumber
        avatar: $avatar
      }
    ) {
      name
      email
      phoneNumber
      avatar
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

export const MUTATION_CREATE_COMMENT = gql`
  mutation ($eventId: Int!, $comment: String!) {
    createComment(eventid: $eventId, comment: $comment) {
      id
      userId
      eventId
      comment
      name
      avatar
    }
  }
`;

export const MUTATION_DELETE_EVENT = gql`
  mutation ($id: Int!) {
    deleteEvent(id: $id) {
      message
    }
  }
`;

export const MUTATION_DELETE_USER = gql`
  mutation ($id: Int!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
