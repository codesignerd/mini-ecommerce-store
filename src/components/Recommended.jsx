const Recommended = () => {
  const tags = ['All', 'Nike', 'Adidas', 'Zara', 'H&M'];

  return (
    <div className="flex gap-3 flex-wrap mb-4">
      {tags.map((tag) => (
        <button
          key={tag}
          className="px-4 py-2 rounded-md text-sm border-2 border-gray-200 hover:bg-orange-500 hover:text-white transition cursor-pointer"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Recommended;
