import { GraphQLServer } from "graphql-yoga";
import { Chapter, ChapterParam } from "../types";

const resolvers = {
  Query: {
    chapter: (obj: any, args: { param: ChapterParam }, context: any, info: any): Chapter => {
      let mockData: Chapter = {
        no: 0,
        name: "",
        version: "",
        original: false,
        postDate: ""
      };
      const paramNo: number = args?.param?.no;

      if(paramNo === 2) {
        mockData = {
          no: 2,
          name: "no2 rutern data",
          version: "1.0.0",
          original: true,
          postDate: '2021-11-26T12:00:00Z'
        };
      }
      return mockData;
    }
  }
};

const server = new GraphQLServer(
  {
    typeDefs: './src/params/test.graphql',
    resolvers
  }
);

server.start(() => {
  console.log('Server is runnning on http://localhost:4000')
});