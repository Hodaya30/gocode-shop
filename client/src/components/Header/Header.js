import './Header.css';
import PriceSlider from "../PriceSlider";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


function Header({categories,filterCategory,filterPriceSlider}) {
  return ( 
  <nav className="product-filter">
  <div className="sort">
    <div className="collection-sort">
    <PriceSlider filterPriceSlider={filterPriceSlider} />
    </div>
    {/* <div className="collection-sort">
      <label>Filter by:</label>
      <select onChange={(e)=>filterCategory(e.target.value)} >
      <option >All</option>
      {categories.map(category => (<option key={category}>{category}</option>))}
      </select>
    </div> */}
    <div className="collection-sort">
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color:'#006064' }}>
        Filter by:
        </InputLabel>
        <NativeSelect onChange={(e)=>filterCategory(e.target.value)}
        >
         <option >All</option>
         {categories.map(category => (<option key={category}>{category}</option>))}

        </NativeSelect>
      </FormControl>
    </Box>
    </div>

    {/* <div className="collection-sort">
      <label>Sort by:</label>
      <select>
        <option value="/">Featured</option>
        <option value="/">Best Selling</option>
        <option value="/">Alphabetically, A-Z</option>
        <option value="/">Alphabetically, Z-A</option>
        <option value="/">Price, low to high</option>
        <option value="/">Price, high to low</option>
        <option value="/">Date, new to old</option>
        <option value="/">Date, old to new</option>
      </select>
    </div> */}
  </div>
</nav>
);
}

export default Header;
