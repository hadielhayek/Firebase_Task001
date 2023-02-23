const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const usersRoute=require('./routes/register')
require('dotenv').config()



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/users', usersRoute)

app.get('/', (req, res) => {
  res.send('Test');
});

mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("successfully connected");
}).catch(console.error);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
module.exports = app;
