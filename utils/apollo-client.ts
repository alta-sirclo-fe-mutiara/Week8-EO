import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}`,
  cache: new InMemoryCache(),
  defaultOptions: process.browser ? undefined : defaultOptions,
});

export default client;
