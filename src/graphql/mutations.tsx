import {gql} from '@apollo/client';


export const CREATE_PRODUCT = gql`
    createProduct(name: String!, price: Float!, description: String): Product
`


export const GET_PRODUCTS = gql`
    products: [Product]
`