const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/student-management-system', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());

const studentRouter = require('./routes/students');

app.use('/api/students', studentRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});