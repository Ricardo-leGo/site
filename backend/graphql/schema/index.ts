import { gql } from "apollo-server-micro";
import user from "./user/user";

const Types = gql`
type User {
  id: ID
}

type Query {
  getUser: User
}
`;


export default [
    Types,
    user
]



