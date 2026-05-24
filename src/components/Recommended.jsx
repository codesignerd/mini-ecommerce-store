const Recommended = ({ handleFilterChange }) => {
  const tags = ['All', 'Nike', 'Adidas', 'Zara', 'H&M', 'Puma'];

  return (
    <div className="flex gap-3 flex-wrap mb-6">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() =>
            handleFilterChange(
              'brand',
              tag.toLocaleLowerCase() === 'all' ? '' : tag,
            )
          }
          className="px-4 py-2 rounded-md text-sm border-2 border-gray-200 hover:bg-orange-500 hover:text-white transition cursor-pointer"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Recommended;
