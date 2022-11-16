import { ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from './../../backend/graphql/schema'
import type { NextApiRequest, NextApiResponse } from 'next'
import resolvers from "../../backend/graphql/resolvers";

const apolloServer = new ApolloServer({

  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  debug:true

});

const startServer = apolloServer.start();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};