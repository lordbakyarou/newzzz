import { useState } from "react";

const Carousel = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full border rounded-xl"
      data-carousel="slide"
    >
      <div className="relative h-96 w-full overflow-hidden rounded-lg md:h-96">
        {articles.slice(2, articles.length - 1).map((article, index) => (
          <div
            key={article.publishedAt}
            className={`absolute duration-700 w-full h-full ease-in-out bg-cover bg-center ${
              index === activeIndex ? "block" : "hidden"
            }`}
            data-carousel-item
            onClick={() => window.open(article.url, "_blank")}
          >
            <img
              src={article.image}
              className="h-96 w-full object-cover bg-center"
            />

            <div className="absolute bottom-0 gap-3 w-full p-4 bg-white/70 ">
              <h1 className="text-black text-xl font-semibold truncate">
                {article?.title || "Untitled Article"}
              </h1>
              <p className="text-gray-900 text-sm line-clamp-2 overflow-hidden text-ellipsis">
                {article?.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse">
        {articles.slice(2, articles.length - 1).map((article, index) => (
          <button
            key={article.publishedAt}
            type="button"
            className={`transition-all duration-300 ease-in-out ${
              index === activeIndex
                ? "bg-gray-500 w-3 h-1 rounded"
                : "bg-gray-200 w-2 h-2 rounded-full"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Carousel Indicators */}
    </div>
  );
};

export default Carousel;
