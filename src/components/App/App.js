//import logo from '.../logo.svg';
import "./App.css";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Products from "../Products/Products";
import * as ReactBootStrap from 'react-bootstrap';
import React, { useEffect, useState} from "react";
import { CartProvider } from "../../CartContext";
function App() {
  const [ loading, setLoading]= useState(false);

  const [InitialProducts, setInitialProducts] =useState( []);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json();}).then((InitialProducts)=>
      {setInitialProducts(InitialProducts);
      setLoading(true);
      setFilterByCategory(InitialProducts);
     }); 
 },[]);

   const mycategories = InitialProducts.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
   const [filterByCategory , setFilterByCategory]= useState(InitialProducts);
   const filterCategory =(category)=>
   {if (category==="All") setFilterByCategory(InitialProducts)
    else setFilterByCategory(InitialProducts.filter((product)=>product.category===category))};
  return (
   <CartProvider>
      <div >
      <Cart />
      <Header categories={mycategories} filterCategory={filterCategory} />
      {loading ?  <Products productsList={filterByCategory} /> :
      <div className="spinner">
      <ReactBootStrap.Spinner  animation="border" role="status"  />
      </div>}
    </div>
    </CartProvider>

  );
}

export default App;
