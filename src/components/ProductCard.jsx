import { FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const {
    id,
    image,
    badge,
    brand,
    title,
    rating,
    reviews,
    newPrice,
    oldPrice,
  } = product;

  return (
    <div
      key={id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 hover:shadow-md transition"
    >
      {/* Image */}
      <div className="relative">
        <img src={image} className="rounded-lg w-full h-45 object-cover" />

        {badge && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {badge}
          </span>
        )}
        <FiHeart className="absolute top-2 right-2 cursor-pointer text-white hover:text-orange-500" />
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <p className="text-xs text-gray-500">{brand}</p>

        <h3 className="font-medium text-sm">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-orange-400" />
          <span>{rating}</span>
          <span className="text-gray-400">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-orange-500 font-semibold">
            ${newPrice.toFixed(2)}
          </p>
          <p className="line-through text-gray-400 text-sm">
            ${oldPrice.toFixed(2)}
          </p>
        </div>

        <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white py-2 rounded-md text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
