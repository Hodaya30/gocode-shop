import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
function Products ({productsList}) {
  return (
    <section className="products">
      {productsList.map(({_id, image,title, description, price}) => (
      <ProductCard 
      key={_id} 
      id={_id}
      image={image} 
      title={title}
      description={description}
       price={price}>
      </ProductCard>))}
    </section>
  );
}
    
    export default Products;
