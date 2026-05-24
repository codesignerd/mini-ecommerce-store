const Sidebar = ({ handleFilterChange }) => {
  const categories = [
    'All',
    'T-Shirts',
    'Hoodies',
    'Jackets',
    'Pants',
    'Shirts',
  ];
  const priceList = ['None', '50', '100', '150'];
  const colors = [
    'All',
    'Black',
    'Blue',
    'Orange',
    'Gray',
    'White',
    'Navy',
    'Brown',
  ];

  const selectColor = (color) => {
    let newColor;
    color = color.toLowerCase();

    if (color === 'black' || color == 'white') {
      newColor = color;
    } else if (color == 'navy' || color == 'brown') {
      newColor = color + '-900';
    } else {
      newColor = color + '-500';
    }

    return newColor;
  };

  return (
    <div className="flex flex-col gap-6 overflow-y">
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-1 text-base">
          {categories.map((category) => (
            <label
              key={category}
              className="category-labels flex gap-2 justify-start items-center cursor-pointer"
            >
              <input
                type="radio"
                className="w-4 h-4"
                name="category"
                value={category}
                onChange={() =>
                  handleFilterChange(
                    'category',
                    category === 'All' ? '' : category,
                  )
                }
              />
              <p>{category}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="space-y-1 text-base">
          {priceList.map((price, index) => (
            <label
              key={`price-` + index}
              className="price-labels flex gap-2 justify-start items-center cursor-pointer"
            >
              <input
                type="radio"
                className="w-4 h-4"
                name="priceList"
                value={price}
                onChange={() =>
                  handleFilterChange(
                    'price',
                    price === 'None' ? '' : Number(price),
                  )
                }
              />
              <p>{price === 'None' ? price : `$${price}`}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex flex-col gap-2">
          {colors.map((color) => {
            let bgColor = selectColor(color);
            return (
              <label
                key={color}
                onClick={() =>
                  handleFilterChange('color', color === 'All' ? '' : color)
                }
                className="color-labels flex gap-2 justify-start items-center cursor-pointer"
              >
                <span
                  className={`w-4 h-4 bg-${bgColor} border border-gray-300 rounded-full`}
                ></span>
                <p>{color}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
