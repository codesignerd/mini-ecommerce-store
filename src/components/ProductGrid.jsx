import ProductCard from './ProductCard';
import products from '../data';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard products={products} />
    </div>
  );
};

export default ProductGrid;
