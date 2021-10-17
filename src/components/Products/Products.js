import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
function Products ({productsList}) {
  return (
    <section className="products">
      {productsList.map(({id, image, description, price}) => (
      <ProductCard 
      key={id} 
      image={image} 
      description={description}
       price={price}>
      </ProductCard>))}
    </section>
  );
}
    
    export default Products;
