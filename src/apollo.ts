import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggendInVar = makeVar<boolean>(false);
export const darkModeVar = makeVar<boolean>(false);

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
})