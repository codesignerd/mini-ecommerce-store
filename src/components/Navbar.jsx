import { FiSearch, FiHeart, FiShoppingCart, FiMoon } from 'react-icons/fi';

const Navbar = ({ products, handleFilterChange }) => {
  return (
    <header className="fixed top-0 right-0 w-full z-100 bg-white border-b border-gray-200 dark:border-gray-100 px-6 md:px-0 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">Shopime</h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md w-100">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            value={products.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Search products..."
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-lg text-gray-700">
          <FiMoon className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
