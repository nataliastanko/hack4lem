const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Express for hack4lem is running on port ${server.address().port}`);
});