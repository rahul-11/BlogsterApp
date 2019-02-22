const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongooseURI, { useMongoClient : true})

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);

const PORT = 5000;
const HOST = '127.0.0.1';

app.listen(PORT,()=>{
  console.log("App listening at :"+PORT);
})
