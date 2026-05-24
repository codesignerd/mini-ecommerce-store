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

    if (color === 'Black' || color === 'White') {
      newColor = color.toLowerCase();
    } else if (color === 'Navy') {
      newColor = 'blue-900';
    } else if (color === 'Brown') {
      newColor = 'amber-800';
    } else {
      newColor = color.toLowerCase();
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
          {colors.map((color, index) => (
            <label
              key={index}
              onClick={() =>
                handleFilterChange('color', color === 'All' ? '' : color)
              }
              className="color-labels flex gap-2 justify-start items-center cursor-pointer"
            >
              <span
                className={`w-4 h-4 bg-${selectColor(color)}-500 border border-gray-300 rounded-full`}
              ></span>
              <p>{color}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
