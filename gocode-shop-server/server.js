const fs=require("fs");
const express = require('express');
const { json } = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get("/products",(req,res)=>{ 
fs.readFile("./products.json","utf-8", (err,data)=>{const products=JSON.parse(data);
res.send(products);});
});
app.get("/products/:id",(req,res)=>{ 
    const{id}=req.params;
    fs.readFile("./products.json","utf-8", (err,data)=>{const products=JSON.parse(data);
   const product= products.find(products=>products.id===+id)
    res.send(product);});
    });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
