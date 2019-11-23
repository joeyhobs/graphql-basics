// Import GraphQLServer
import { GraphQLServer } from 'graphql-yoga'

// Set up type Definitions
const typeDefs = `
    type Query {
        users(query: String!): [Users!]!
        me: Users!
        post: Post!
    }

    type Users {
        id: ID
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`



// Set up resolvers
const resolvers = {
    Query: {

    }
}




// Spin up server on port 4000
const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => {
    console.log('server is up and running on port 4000')
})