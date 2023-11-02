const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/todoes', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
