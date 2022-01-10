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
  const [filter, setFilter] = useState(InitialProducts);
  const [max, setMax] = useState(1000);
  const [min, setMin] = useState(0);
  const [category, setCategory] = useState("All");


  useEffect(() => {
    fetch("/api/products")
      .then(res => {
        return res.json();
      })
      .then(InitialProducts => {
        setInitialProducts(InitialProducts);
        setLoading(true);
        setMin(0);
        setMax(1000);
        setFilter(InitialProducts);
      });
  }, []);

  const mycategories = InitialProducts.map(p => p.category).filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const filterCategory = category => {
    if (category === "All")  setFilter(
      InitialProducts.filter(product => product.price >= min && product.price <= max)
    );
    else
    setFilter(
        InitialProducts.filter(product => product.category === category&& product.price >= min && product.price <= max)
      );
      setCategory(category);
  };
  const filterPriceSlider = ([minPrice, maxPrice]) => {
    if (category === "All")  setFilter(
      InitialProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
    );
    else
    setFilter(
      InitialProducts.filter(product => product.price >= minPrice && product.price <= maxPrice && product.category === category)
    );
    setMax(maxPrice);
    setMin(minPrice);
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
      {loading ? ( <Products productsList={filter} /> ) : (
        <div className="spinner">
          <ReactBootStrap.Spinner animation="border" role="status" />
        </div>
      )}

    </div>
  );
}
export default Home;


