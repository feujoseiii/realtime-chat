const express = require('express');
const hbs = require('hbs');


//initial configurations
const path = require('path');
var port = process.env.PORT || 3000;
var app = express();
var publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));


//routes

//listen to PORT
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
