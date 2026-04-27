const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-1 text-sm">
          <p className="cursor-pointer hover:text-orange-500">T-Shirts</p>
          <p className="cursor-pointer hover:text-orange-500">Hoodies</p>
          <p className="cursor-pointer hover:text-orange-500">Jackets</p>
          <p className="cursor-pointer hover:text-orange-500">Jeans</p>
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="space-y-1 text-sm">
          <p>Under $50</p>
          <p>Under $100</p>
          <p>Premium</p>
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          <span className="w-4 h-4 bg-black rounded-full"></span>
          <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
