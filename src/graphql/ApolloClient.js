import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://b25-netflix-backend.herokuapp.com/graphql"
});

export default client;