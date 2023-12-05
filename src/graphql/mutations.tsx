
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

// export const getUser = gql`
//   query getNumber1 {
//     getUser($user: String!){
//         currentUser
//     }
//   }

