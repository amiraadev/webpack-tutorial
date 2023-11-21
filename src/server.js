const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send('Some dummy response');
})

app.listen(3000,function(){
    console.log('Zpplication is running on port 3000');
})