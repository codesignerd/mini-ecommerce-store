import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Recommended from './components/Recommended';

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Navbar />

      <div className="flex max-w-7xl mx-auto px-4 gap-6 pt-6">
        {/* Sidebar */}
        <aside className="w-62.5 hidden md:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Recommended />

          {/* Toolbar */}
          <div className="flex justify-between items-center my-4">
            <p className="text-sm text-gray-500">Showing 1–12 of 50 products</p>

            <select className="border px-3 py-2 rounded-md text-sm dark:bg-gray-800">
              <option>Default Sorting</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>
          </div>

          <ProductGrid />
        </main>
      </div>
    </div>
  );
};

export default App;
