const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gqlResolvers = require('./gqlResolvers');
const gqlSchema = require('./gqlSchema');
const { buildSchema } = require('graphql');

const schema = buildSchema(gqlSchema);

function createGqlServer(app) {
  app.use(cors({ origin: '*' }));
  app.use(graphqlHTTP({
    schema,
    rootValue: gqlResolvers,
    graphiql: process.env.NODE_ENV === 'dev'
  }));
}

module.exports = createGqlServer;
