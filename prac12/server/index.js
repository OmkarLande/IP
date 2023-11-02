const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const todoRoutes = require('./routes/todos');

const app = express();
app.use(cors())
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/neww', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
