const Sidebar = () => {
  return (
    <div className="flex flex-col gap-8 pt-10">
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-1 text-base">
          <p className="cursor-pointer hover:text-orange-500">T-Shirts</p>
          <p className="cursor-pointer hover:text-orange-500">Hoodies</p>
          <p className="cursor-pointer hover:text-orange-500">Jackets</p>
          <p className="cursor-pointer hover:text-orange-500">Jeans</p>
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="space-y-1 text-base">
          <p>Under $50</p>
          <p>Under $100</p>
          <p>Premium</p>
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex flex-col gap-4">
          <label className="color-labels flex gap-2 justify-start items-center cursor-pointer">
            <span className="w-4 h-4 bg-black rounded-full"></span>
            <p>Black</p>
          </label>
          <label className="color-labels flex gap-2 justify-start items-center cursor-pointer">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <p>Blue</p>
          </label>
          <label className="color-labels flex gap-2 justify-start items-center cursor-pointer">
            <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
            <p>Orange</p>
          </label>
          <label className="color-labels flex gap-2 justify-start items-center cursor-pointer">
            <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
            <p>Grey</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
