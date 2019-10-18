const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
})
)

const URI = "mongodb://127.0.0.1:27017/authNew"

mongoose.connect(URI, { useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=>console.log("Server is connected to the database"))
  .catch((err)=>console.log(err));

var Users = require('./routes/Users');

app.use('/users', Users);

app.listen(port, ()=>{
  console.log("Server is running!!!");
})
