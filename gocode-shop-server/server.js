const fs=require("fs");
const express = require('express');
const mongoose = require('mongoose');
const { json } = require("express");
const app = express();
app.use(express.json());
const productSchema=new mongoose.Schema(
  {
    title: String,
    price: Number,
    description:  String,
    category: String,
    image: String,

  }
);
const Product=mongoose.model("Product",productSchema);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/products",(req,res)=>{ 
  Product.find((err,products)=>{
    res.send(products);
  });
// fs.readFile("./products.json","utf-8", (err,data)=>{const products=JSON.parse(data);
 //res.send(products);});
});

app.get("/products/searchTitle",(req,res)=>{ 
  const {title}=req.query;
  Product.find((err,products)=>{
    if(title){
         products=products.filter((product)=>product.title.toLowerCase().includes(title.toLowerCase())
         );}
    res.send(products);
  });

  // fs.readFile("./products.json","utf-8", (err,data)=>{
  //   let products=JSON.parse(data);
  //   if(title){
  //    products=products.filter((product)=>product.title.toLowerCase().includes(title.toLowerCase())
  //    );}
  //   res.send(products);
  //   });
  });
app.get("/products/searchCategory",(req,res)=>{      
     const {category}=req.query;  
     Product.find((err,products)=>{
      if(category){        
           products=products.filter((product)=>product.category.toLowerCase().includes(category.toLowerCase()));} 
      res.send(products);

    //  fs.readFile("./products.json","utf-8", (err,data)=>
    //  { let products=JSON.parse(data);      
    //    if(category){        
    //     products=products.filter((product)=>product.category.toLowerCase().includes(category.toLowerCase())  
    //            );}       
    //     res.send(products);   
       }); 
   });
   app.get("/products/searchCategorySlider",(req,res)=>{      
    const {category}=req.query; 
    const{min}=req.query;
    const{max}=req.query;    
    Product.find((err,products)=>{
      if(category){        
         products=products.filter((product)=>product.price>min&&product.price<max&&product.category.toLowerCase().includes(category.toLowerCase()))  
             ;} 
      res.send(products);
    // fs.readFile("./products.json","utf-8", (err,data)=>
    // { let products=JSON.parse(data);      
    //   if(category){        
    //    products=products.filter((product)=>product.price>min&&product.price<max&&product.category.toLowerCase().includes(category.toLowerCase()))  
    //           ;}       
    //    res.send(products);   
      }); 
  });
  
app.get("/products/:id",(req,res)=>{ 
     const{id}=req.params;
     Product.findById(id,(err,product)=>{
          res.send(product);   
     });
  //   console.log(id);
  //   fs.readFile("./products.json","utf-8", (err,data)=>{const products=JSON.parse(data);
  //  const product= products.find(products=>products.id===+id)
  //   res.send(product);});
    });


app.post("/products",(req,res)=>{
  const {title}=req.body;
  const{price}=req.body;
  const{description}=req.body;
  const{category}=req.body;
  const{image}=req.body;
  //const{rating}=req.body;
  const product =new Product({title,price,description,category,image});
  product.save((err,product)=>{res.send(product)});
  // fs.readFile("./products.json","utf-8",(err,data)=>{
  //   const products=JSON.parse(data);
  //   const newProduct={
  //     id: products.length +1, title,price,description,category,image,rating};
  //     products.push(newProduct);
  //     fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
  //       if (err){
  //         res.send(Error);
  //       }
  //       res.send(newProduct);
  //     });
      
  //    });
  
});
app.put("/products/:id",(req,res)=>{ 
  const {id}=req.params;
  const {title,price,description,category,image,rating}=req.body;
  Product.findByIdAndUpdate(id,{title,price,description,category,image,rating},{new: true},(err,product)=>{
    res.send(product);});

  // fs.readFile("./products.json","utf-8",(err,data)=>{
  //   const products=JSON.parse(data);
  //   const productIndex=products.findIndex((products)=>products.id===+id);
  //   products[productIndex].title=title;
  //   products[productIndex].price=price;
  //   products[productIndex].description=description;
  //   products[productIndex].category=category;
  //   products[productIndex].image=image;
  //   products[productIndex].rating=rating;

    // fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
    //   if (err){
    //     res.send("Error please send a correct request");
    //   }
    //   res.send(products[productIndex]);
    // });  
   });
app.delete("/products/:id",(req,res)=>{
  const {id}=req.params;
  Product.findByIdAndDelete(id,(err,product)=>{
    if(err){
      res.send("ID NOT FOUND")
    }
    res.send(product);
  });
  // fs.readFile("./products.json","utf-8",(err,data)=>{
  //   const products=JSON.parse(data);
  //   const productIndex=products.findIndex((products)=>products.id===+id);
  //   products.splice(productIndex,1)

  //   fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
  //     if (err){
  //       res.send("Error please send a correct request");
  //     }
  //     res.send(products);
  //   });  
   });

mongoose.connect('mongodb://localhost/gocode_shop', 
  {  useNewUrlParser: true,
     useUnifiedTopology: true,
  },(err)=>{app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
  });

  }
);


