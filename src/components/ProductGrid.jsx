import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-6">
          <p>Found {products.length} products that matches the search</p>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
