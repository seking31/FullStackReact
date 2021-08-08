const express = require('express');
const PORT = 3001;
const bodyParser = require("body-parser");
const app = express();

const articlesRouter = require('./controllers/articles')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/articles', articlesRouter);

app.get('/', (req, res) => {
  res.send('Hello from root route.');
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});