const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(express.json());
app.use(express.static("client/build"));

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String
});
const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  Product.find((err, products) => {
    res.send(products);
  });
  // fs.readFile("./products.json","utf-8", (err,data)=>{const products=JSON.parse(data);
  //res.send(products);});
});

app.get("/api/products/searchTitle", (req, res) => {
  const { title } = req.query;
  Product.find((err, products) => {
    if (title) {
      products = products.filter(product =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );
    }
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
app.get("/api/products/searchCategory", (req, res) => {
  const { category } = req.query;
  Product.find((err, products) => {
    if (category) {
      products = products.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    res.send(products);

    //  fs.readFile("./products.json","utf-8", (err,data)=>
    //  { let products=JSON.parse(data);
    //    if(category){
    //     products=products.filter((product)=>product.category.toLowerCase().includes(category.toLowerCase())
    //            );}
    //     res.send(products);
  });
});
app.get("/api/products/searchCategorySlider", (req, res) => {
  const { category } = req.query;
  const { min } = req.query;
  const { max } = req.query;
  Product.find((err, products) => {
    if (category) {
      products = products.filter(
        product =>
          product.price > min &&
          product.price < max &&
          product.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    res.send(products);
    // fs.readFile("./products.json","utf-8", (err,data)=>
    // { let products=JSON.parse(data);
    //   if(category){
    //    products=products.filter((product)=>product.price>min&&product.price<max&&product.category.toLowerCase().includes(category.toLowerCase()))
    //           ;}
    //    res.send(products);
  });
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, product) => {
    res.send(product);
  });
  //   console.log(id);
  //   fs.readFile("./products.json","utf-8", (err,data)=>{const products=JSON.parse(data);
  //  const product= products.find(products=>products.id===+id)
  //   res.send(product);});
});

app.post("/api/products", (req, res) => {
  const { title, price, description, category, image } = req.body;
  //const{rating}=req.body;
  const product = new Product({ title, price, description, category, image });
  product.save((err, product) => {
    if (err) {
      res.send(" NOT FOUND", err);
    }
    res.send(product);
  });
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
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image, rating } = req.body;
  Product.findByIdAndUpdate(
    id,
    { title, price, description, category, image, rating },
    { new: true },
    (err, product) => {
      res.send(product);
    }
  );

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
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err, product) => {
    if (err) {
      res.send("ID NOT FOUND");
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
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const initProducts = () => {
  Product.findOne((err, product) => {
    if (!product) {
      fs.readFile("./products.json", "utf8", (err, data) => {
        const products = JSON.parse(data);
        Product.insertMany(products, (err, productRes) => {
          console.log("err", err);
          console.log("productRes", productRes);
          //res.send(productRes);
        });
      });
    }
  });
};

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.connect(
  //"mongodb://localhost/gocode_shop",
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    app.listen(port, () => {
      console.log("Example app listening on port 8000!");
       initProducts();
    });
  }
);
