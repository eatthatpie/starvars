const createGqlServer = require('./createGqlServer');
const app = require('express')();

try {
  createGqlServer(app);
} catch (e) {
  console.error(e);
}

app.listen(4444);
