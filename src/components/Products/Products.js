import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
function Products ({products}) {
  return (
    <section className="products">
      {products.map((productItem) => <ProductCard key={productItem.id} image={productItem.image} description={productItem.description} price={productItem.price}></ProductCard>)}
    </section> 
  );
}
    
    export default Products;
