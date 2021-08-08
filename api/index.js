const express = require('express');
const PORT = 3001;
const app = express();

const articlesRouter = require('./controllers/articles')

app.use('/articles', articlesRouter);

app.get('/', (req, res) => {
  res.send('Hello from root route.');
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});