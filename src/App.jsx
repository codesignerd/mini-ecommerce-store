import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Recommended from './components/Recommended';
import { useState } from 'react';
import products from './data';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState({
    search: '',
    brand: '',
    category: '',
    price: '',
    color: '',
  });

  const filteredItems = products.filter((product) => {
    return (
      product.title
        .toLowerCase()
        .includes(filteredProducts.search.toLowerCase()) &&
      (filteredProducts.brand === '' ||
        product.brand === filteredProducts.brand) &&
      (filteredProducts.category === '' ||
        product.category === filteredProducts.category) &&
      (filteredProducts.price === '' ||
        product.newPrice <= filteredProducts.price) &&
      (filteredProducts.color === '' ||
        product.color === filteredProducts.color)
    );
  });

  const handleFilterChange = (filterType, value) => {
    setFilteredProducts((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Navbar
        products={filteredProducts}
        handleFilterChange={handleFilterChange}
      />

      <div className="flex max-w-7xl pt-17.5 mx-auto gap-8">
        {/* Sidebar */}
        <aside className="sticky top-17.5 pt-8 h-full w-50 bg-white border-r border-gray-200 hidden md:block">
          <Sidebar handleFilterChange={handleFilterChange} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-8 px-6 md:px-0">
          <Recommended handleFilterChange={handleFilterChange} />

          {/* Toolbar */}
          <div className="flex justify-between items-center my-4">
            <p className="text-sm text-gray-500">
              Showing {filteredItems.length} of {products.length} products
            </p>

            <select className="bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-600 outline-0 cursor-pointer dark:bg-gray-800">
              <option>Default Sorting</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>
          </div>

          <ProductGrid products={filteredItems} />
        </main>
      </div>
    </div>
  );
};

export default App;
