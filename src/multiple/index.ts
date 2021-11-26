import { GraphQLServer } from "graphql-yoga";
import { Chapter, ChapterParam } from "../types";

const resolvers = {
  Query: {
    chapters: (obj: any, args: any, context: any, info: any): Chapter[] => {

      const mockDatas : Chapter[] = [
        {
          no: 2,
          name: '配列のデータ1',
          version: '1.0.0',
          original: true,
          postDate: '2021-11-26T12:00:00Z'
        },
        {
          no: 3,
          name: '配列のデータ2',
          version: '1.0.0',
          original: true,
          postDate: '2020-11-26T12:00:00Z'
        }
      ];
      return mockDatas;
    },
    length: (): number => {
      return 2;
    }
  }
};

const server = new GraphQLServer(
  {
    typeDefs: './src/multiple/test.graphql',
    resolvers
  }
);

server.start(() => {
  console.log('Server is runnning on http://localhost:4000')
});