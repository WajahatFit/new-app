// apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'mongodb+srv://soufianebdaoui:ptX8HWxU9DX5Edce@cluster0.xxnivke.mongodb.net/?retryWrites=true&w=majority/graphql', // GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
