const Recommended = () => {
  const tags = ['All', 'Nike', 'Adidas', 'Zara', 'H&M'];

  return (
    <div className="flex gap-3 flex-wrap mb-4">
      {tags.map((tag) => (
        <button
          key={tag}
          className="px-4 py-1 rounded-full text-sm border hover:bg-orange-500 hover:text-white transition"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Recommended;
