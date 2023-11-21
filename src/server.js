const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// import express from 'express';
// import path from 'path';
// import fs from 'fs';
// import app from express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));


app.get('/', function(req, res){
const pathToHtmlFile = path.resolve(__dirname,"../dist/test.html");
const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
// console.log(contentFromHtmlFile);
res.send(contentFromHtmlFile);
})

app.listen(3000,function(){
    console.log('Application is running on http://localhost:3000');
})