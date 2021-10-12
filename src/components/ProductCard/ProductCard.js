
import './ProductCard.css'
function ProductCard({image,description,price}) {
  return (
    <div className="product-card">
        <div className="product-image">
          <img
            src={image}
          />
        </div>
        <div className="product-info">
          <h5>{description}</h5>
          <h6>{price}</h6>
        </div>
      </div>
  );
}

export default ProductCard;
