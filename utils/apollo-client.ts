import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "54.179.3.68",
  cache: new InMemoryCache(),
});

export default client;
