const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        hello: String
        student: Student
    }

    type Student {
        id: ID
        name: String
        course: String
        age: Int
    }
`);
const root = {
    hello: () => {
        return "Hello World";
    },

    student: () => {
        return {
            id: "1",
            name: "Tushar",
            course: "CSE",
            age: 20
        };
    }
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000/graphql");
});