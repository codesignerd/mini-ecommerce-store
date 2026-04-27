import { FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 hover:shadow-md transition">
      {/* Image */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/200"
          className="rounded-lg w-full h-45 object-cover"
        />

        <FiHeart className="absolute top-2 right-2 cursor-pointer" />
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <p className="text-xs text-gray-500">Nike</p>

        <h3 className="font-medium text-sm">Oversized Hoodie</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-orange-400" />
          <span>4.8</span>
          <span className="text-gray-400">(120)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-orange-500 font-semibold">$45</p>
          <p className="line-through text-gray-400 text-sm">$60</p>
        </div>

        <button className="w-full mt-2 bg-orange-500 text-white py-2 rounded-md text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
