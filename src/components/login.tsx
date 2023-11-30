import React, { useEffect } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  // Replace with your actual GraphQL server endpoint
  const graphqlEndpoint = 'mongodb+srv://soufianebdaoui:ptX8HWxU9DX5Edce@cluster0.xxnivke.mongodb.net/?retryWrites=true&w=majority/graphql';

  // Construct a GraphQL query
  const graphqlQuery = `
    query {
      currentUser
    }
  `;

  useEffect(() => {
    // Make a POST request to the GraphQL endpoint
    axios.post<{ data: { currentUser: string } }>(graphqlEndpoint, { query: graphqlQuery })
      .then(response => {
        console.log('GraphQL Response:', response.data.data.currentUser);
      })
      .catch(error => {
        console.error('GraphQL Error:', error.response ? error.response.data : error.message);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>Login</div>
  );
};

export default Login;
