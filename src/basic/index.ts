import { GraphQLServer } from "graphql-yoga";
import { Chapter } from "../types";

const resolvers = {
  Query: {
    chapter: (obj: any, args: any, context: any, info: any): Partial<Chapter>=> {

      const mockData: Partial<Chapter> = {
        no: 1,
        name: 'Queryを定義してデータの取得を行う',
        version: '1.0.0',
        original: true,
        postDate: '2021-11-26T12:00:00Z'
      };
      return mockData;
    }
  }
};

const server = new GraphQLServer(
  {
    typeDefs: './src/basic/test.graphql',
    resolvers
  }
);

server.start(() => {
  console.log('Server is runnning on http://localhost:4000')
});