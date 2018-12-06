import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://b25-netflix-backend.herokuapp.com/graphql"
});

/* import { ApolloClient }  from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink }      from 'apollo-link-http';

const API_URL = "https://b25-netflix-backend.herokuapp.com";

const client = new ApolloClient({
    link: new HttpLink({ uri: `${API_URL}/graphql` }),
    cache: new InMemoryCache()
}); */

export default client; 