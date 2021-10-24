import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ProductDetails.css'
function ProductDetails(){
const { id }=useParams();
const [product, setProduct]=useState(null);
useEffect(()=>{
    fetch( `https://fakestoreapi.com/products/${id}`).then((res)=>res.json())
    .then((product)=>{setProduct(product);    });
},[id]);

return(

    <div className="product-card-details">
        <div className="product-image-details">
          <img alt="" src={product?.image}/>
        </div>
        <div className="product-info-details">
          <h5>{product?.description}</h5>
          <h6>{product?.price}$</h6>
        </div>
      </div>

    )
}
export default ProductDetails;