import "./Home.css";
import Cart from "../components/Cart/Cart";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import * as ReactBootStrap from "react-bootstrap";
import React, { useEffect, useState } from "react";
//import { CartProvider } from "../../CartContext";
//import { CartContext } from "../CartContext";
//import { AppBar } from '@mui/material';
import AppBarCom from "../components/AppBarCom/AppBarCom";
function Home() {
  const [loading, setLoading] = useState(false);
  const [InitialProducts, setInitialProducts] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState(InitialProducts);

  // [filterByPrice , setFilterByPrice]= useState(filterByCategory);

  useEffect(() => {
    fetch("/api/products")
      .then(res => {
        return res.json();
      })
      .then(InitialProducts => {
        setInitialProducts(InitialProducts);
        setLoading(true);
        setFilterByCategory(InitialProducts);
      });
  }, []);

  const mycategories = InitialProducts.map(p => p.category).filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const filterCategory = category => {
    if (category === "All") setFilterByCategory(InitialProducts);
    else
      setFilterByCategory(
        InitialProducts.filter(product => product.category === category)
      );
  };
  const filterPriceSlider = ([maxPrice, minPrice]) => {
    setFilterByCategory(
      InitialProducts.filter(
        product => product.price >= maxPrice && product.price <= minPrice
      )
    );
  };

  return (
    <div>
      <AppBarCom />
      <Cart />
      <Header
        categories={mycategories}
        filterCategory={filterCategory}
        filterPriceSlider={filterPriceSlider}
      />
      {loading ? (
        <Products productsList={filterByCategory} />
      ) : (
        <div className="spinner">
          <ReactBootStrap.Spinner animation="border" role="status" />
        </div>
      )}
    </div>
  );
}
export default Home;
