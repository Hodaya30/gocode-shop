//import logo from '.../logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import ToggleButton from "../ToggleButton";
import * as ReactBootStrap from 'react-bootstrap';
import { useEffect, useState } from "react";
function App() {
  const [ loading, setLoading]= useState(true);
  const [myproductList, setMyproductList] =useState( []);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json();}).then((myproductList)=>
      {setMyproductList(myproductList);
       }  ); 
       setLoading(false);
 },[]);
 
   const mycategories = myproductList.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
   const [filterByCategory , setFilterByCategory]= useState(myproductList);
   const filterCategory =(category)=>setFilterByCategory(myproductList.filter((product)=>product.category===category));
  return (
    <div >
      <ToggleButton/>
      <Header categories={mycategories} filterTheCategory={filterCategory} />
      <Products productsList={filterByCategory} />
    </div>
  );
}

export default App;
