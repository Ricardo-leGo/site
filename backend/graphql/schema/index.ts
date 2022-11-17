import { gql } from "apollo-server-micro";
import user from "./user/user";

const Types = gql`
type User {
  id: ID
}



type GenericResult{
  msg:String
  status:Boolean
  Result: [ String ]

}

type Query {
  getUser: User
  insertIntoDatabase:GenericResult
}
`;


export default [
    Types,
    user
]



