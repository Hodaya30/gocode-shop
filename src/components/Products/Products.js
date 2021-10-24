import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
function Products ({productsList}) {
  console.log(productsList);
  return (
    <section className="products">
      {productsList.map(({id, image, description, price}) => (
      <ProductCard 
      key={id} 
      id={id}
      image={image} 
      description={description}
       price={price}>
      </ProductCard>))}
    </section>
  );
}
    
    export default Products;
