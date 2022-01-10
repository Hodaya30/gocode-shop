//import logo from '.../logo.svg';

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CartContext } from "../../CartContext";
import Home from "../../views/Home";
import ProductDetails from "../../views/ProductDetails";
import FullFeaturedCrudGrid from "../Admin";
function App() {
  const [cart, setCart]=useState([]);

  
  return (
    <CartContext.Provider value={[cart, setCart]}>

<Router>
      <div>
        <nav>
          <ul>
           
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/admin/">
          <FullFeaturedCrudGrid />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </CartContext.Provider>


  );

}

export default App;
