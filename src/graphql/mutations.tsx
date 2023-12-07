
import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $price: Float!, $description: String) {
    createProduct(name: $name, price: $price, description: $description) {
      id
      name
      price
      description
    }
  }
`;

// export const CREATE_USER = gql`
//   mutation CreateProduct($name: String!, $price: Float!, $description: String) {
//     createProduct(name: $name, price: $price, description: $description) {
//       id
//       name
//       price
//       description
//     }
//   }
// `;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      description
    }
  }

  
  `;
export const LOG_IN = gql`
  mutation logIn($input: LogInInput){
    logIn(input: $input){
        token
        user{
            username
            password
            email
        }
    }
  }

`;

export const CREATE_USER = gql`
mutation createUserInput($input: CreateUserInput){
  createUser(input: $input){
    user{
      username
      password
      email
    }

  }
}`

// export const getUser = gql`
//   query getNumber1 {
//     getUser($user: String!){
//         currentUser
//     }
//   }

