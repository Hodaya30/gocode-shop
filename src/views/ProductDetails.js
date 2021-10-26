import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../CartContext";
import AppBarCom from "../components/AppBarCom/AppBarCom";
import './ProductDetails.css'
function ProductDetails(){
const { id }=useParams();
const [product, setProduct]=useState(null);

useEffect(()=>{
    fetch( `https://fakestoreapi.com/products/${id}`).then((res)=>res.json())
    .then((product)=>{setProduct(product);    });
},[id]);

return(
  <div>
      <AppBarCom/>
    <div className="product-card-details">
        <div className="product-image-details">
          <img alt="" src={product?.image}/>
        </div>
        <div className="product-info-details">
          <h5>{product?.description}</h5>
          <h6>{product?.price}$</h6>
        </div>
      </div>

      </div>

    )
}
export default ProductDetails;