
import './ProductCard.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductImage from '../ProductImage/ProductImage';
function ProductCard() {
    return (<div className="product-card">
     <ProductImage />
     <ProductInfo />

</div>
);
}
export default ProductCard;
