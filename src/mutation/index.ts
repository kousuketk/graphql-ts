import { GraphQLServer } from "graphql-yoga";
import { Chapter, CreateParam, UpdateParam } from "../types";

const resolvers = {
  Query: {
    chapter: (obj: any, args: any, context: any, info: any): Partial<Chapter> => {

      const mockData: Partial<Chapter> = {
        no: 1,
        name: 'Queryを定義してデータの取得を行う',
        version: '1.0.0',
        original: true,
        postDate: 'test-date'
      };
      return mockData
    }
  },
  Mutation: {
    create: (args: { param: CreateParam }): Chapter => {
      const result: Chapter = {
        ...args?.param
      };
      
      return result;
    },
    update: (args: { param: UpdateParam }): Chapter => {
      const result: Chapter = {
        ...args?.param
      };

      return result;
    }
  }
};


const server = new GraphQLServer(
  {
    typeDefs: './src/mutation/test.graphql',
    resolvers,
  }
);

server.start(() => {
  console.log('server is runnning on port 4000');
})