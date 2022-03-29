const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require('./routes/user.routes');
require("dotenv").config({ path: "./config/.env" });
require('./config/db');
const app = express();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
app.use('/api/user', userRoutes);



// server
app.listen(5000, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
