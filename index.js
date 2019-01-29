//
// import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// we are using node
 const { GraphQLServer } = require('graphql-yoga')

// with gragp ql set up a schema
// schema
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  // quer
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
