import { FiSearch, FiHeart, FiShoppingCart, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">Shopi</h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md w-100">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-lg">
          <FiMoon className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
