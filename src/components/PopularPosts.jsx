import { useEffect, useState } from "react";
import PostCards from "./PostCards";
import axios from "axios";

// import { articles } from "../utils/dummyData";

const URL =
  "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=" +
  import.meta.env.VITE_API_KEY;

const PopularPosts = ({ articles }) => {
  const [popularArticles, setPopularArticles] = useState(null);

  //   useEffect(() => {
  //     async function fetchArticles() {
  //       const data = await axios.get(URL);
  //       console.log(data.data.articles);
  //       setPopularArticles(data.data.articles);
  //     }

  //     fetchArticles();
  //   }, []);

  //   console.log(articles, "Is this working");

  return (
    <div className="w-full p-10 flex flex-col gap-10">
      <div className="text-2xl font-bold">Popular Posts</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles?.map((article) => (
          <PostCards
            article={article}
            key={article.publishedAt + article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
