//import logo from '.../logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../../views/Home";
import ProductDetails from "../../views/ProductDetails";
function App() {
  
  return (

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">GoShop</Link>
            </li>
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  

  );
}

export default App;
