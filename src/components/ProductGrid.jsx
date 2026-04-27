import ProductCard from './ProductCard';

const ProductGrid = () => {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dummy.map((item) => (
        <ProductCard key={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
