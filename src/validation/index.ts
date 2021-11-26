import { GraphQLServer } from "graphql-yoga";
import { Chapter, CreateParam, UpdateParam, Result, Error } from '../types';

const resolvers = {
  Query: {
    chapter: (): Partial<Chapter> => {
      const mockData: Partial<Chapter> = {
        no: 1,
        name: 'sample name',
        version: '1.0.0',
        original: true,
        postDate: 'sample date'
      };
      return mockData;
    }
  },
  Mutation: {
    create: (_: any, args: { param: CreateParam }): Result => {
      let chapter: Chapter;
      let statusCode: number = 200;
      let error: Error[] = [];

      if(args?.param?.no < 5) {
        chapter = {
          no: 0,
          name: "",
          version: "",
          original: false,
          postDate: ""
        };
        statusCode = 400;
        error.push({
          value: 'Duplicate No.',
          code: 1
        })
      } else {
        chapter = {
          ...args?.param
        };
      };
      return {
        data: chapter,
        statusCode,
        error
      };
    },
    update: (_: any, args: { param: UpdateParam }): Result => {
      let chapter: Chapter = {
        ...args?.param
      };
      let statusCode: number = 200;
      let error: Error[] = [];

      return {
        data: chapter,
        statusCode,
        error
      }
    }
  }
};

const server = new GraphQLServer(
  {
    typeDefs: './src/validation/test.graphql',
    resolvers
  }
);

server.start(() => {
  console.log('server is runnning on port 4000');
})