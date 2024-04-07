require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

app.get('/',function(req , res){
    res.send('Defaulf Route');
});

app.get('/about',function(req , res){
    res.send('About');
});

app.listen(PORT, function(){

console.log('Server is running on port'+ ' ' + PORT + ' ' + 'naja');

});