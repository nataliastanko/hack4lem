const app = require('./app');
const port = 3000
const server = app.listen(port, () => {
  console.log(`Express for hack4lem is running on port ${server.address().port}`);
});