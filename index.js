const express = require('express');
const app = express();
app.get('/', (request, response) => {
  response.send('Our first Node.js webserver');
});
app.listen(3000, () => console.log('Server running on port 3000'));

console.log("hack4lem")
