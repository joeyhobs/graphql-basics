// Import the GraphQLServer
import { GraphQLServer } from 'graphql-yoga'

// Scalar Types - String, Boolean, Int, Float, ID. (BIIFS)

/* Type Definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`
*/

/*
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`
*/ 


const typeDefs = `
    type Query {
        greeting(name: String, job: String!): String!
        add(numbers: [Float!]!): Float!
        grades: [Int!]!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
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



//------**** RESOLVERS FOR THE QUERIES ABOVE *****-------

/*
//Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!'
        },
        name() {
            return 'Joey Crack'
        },
        location() {
            return 'A-Town Academy'
        },
        bio () {
            return 'Tru baller basketball is my life.'
        }
    }
}
*/

/*
const resolvers = {
    Query: {
        id() {
            return 'abc123'
        },
        name () {
            return 'Jachie'
        },
        age () {
            return 32
        },
        employed () {
            return true
        },
        gpa () {
            return 4.02
        }
    }
}
*/


const resolvers = {
    Query: {
        greeting(parent, args, ctx, info) {
            if (args.name && args.job) {
                return `Hello, ${args.name}! You are my favourite ${args.job}.`
            } else {
                return 'Hello!'
            }
        },
        add (parent, args, ctx, info) {
            if (args.numbers.length === 0) {
                return 0
            }

            // [1, 5, 10, 2]
            return args.numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
        },
        grades (parent, args, cts, info) {
            return [99, 80, 93]
        },
        me() {
            return {
                id: 'abc123',
                name: 'Keke',
                email: 'Keke@example.com',
            }
        },
        post() {
            return {
                id: 'abc123',
                title: 'HTML FORM VALIDATION',
                body: 'Learn how to validate forms using plain old html',
                published: false
            }
        }
    }
}



// Spin up your graphql server
const server = new GraphQLServer ({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up and running on port 4000')
})