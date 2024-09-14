const MainArticle = ({ article }) => {
  // Handle missing image gracefully
  const defaultImage =
    "https://via.placeholder.com/600x400?text=No+Image+Available";

  return (
    <div
      className="relative w-full h-96 rounded-xl bg-cover bg-center shadow-lg"
      style={{
        backgroundImage: `url(${article.image || defaultImage})`,
      }}
    >
      {/* Overlay for text content */}
      <div className="absolute bottom-0 gap-3 w-full p-4 bg-white/70 rounded-b-xl">
        <h1 className="text-black text-xl font-semibold truncate">
          {article?.title || "Untitled Article"}
        </h1>
        <p className="text-gray-900 text-sm line-clamp-2 overflow-hidden text-ellipsis">
          {article?.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MainArticle;
