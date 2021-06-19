require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const routes = require('./routes');
app.use(cors())
app.use(express.json());
app.use(routes)

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cursojs.e2nu7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen('3333', () => {
  console.log('Server is running');
})