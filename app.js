const express = require('express');
const insert = require('./routes/insert')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended:false
}))
app.use(express.static(__dirname + '/public'));

app.use('/' , insert);

app.listen(3000 , () => console.log('Listening on PORT 3000'));