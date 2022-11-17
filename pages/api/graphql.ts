import dotenv from 'dotenv';

dotenv.config({path:'.env'});

import { ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from './../../backend/graphql/schema'
import type { NextApiRequest, NextApiResponse } from 'next'
import resolvers from "../../backend/graphql/resolvers";
import { getConnection } from "../../backend/databases/relational/mongoose/conn";
import { Connection } from 'mongoose';

let dbConn: Connection | null = null;


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ( req ) => {


      if( !dbConn  ){
        
        dbConn =  await getConnection();

        // console.log( dbConn )
        return { dbConn, req }
      }

      return { dbConn, req }
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});
const startServer = apolloServer.start();
export default async function handler(
  req:NextApiRequest, 
  res:NextApiResponse
  ){

  await startServer;
  await apolloServer.createHandler({
  path: "/api/graphql",

  })(
    req, 
    res
    );
}
export const config = {
  api: {
    bodyParser: false,
  },
};