import Main from "../components/Main";
import Navbar from "../components/Navbar";
import PopularPosts from "../components/PopularPosts";
import TopTags from "../components/TopTags";
import { useEffect, useState } from "react";
import axios from "axios";

import { dummyArticles } from "../utils/dummyData";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Shimmer from "../components/shimmer/Shimmer";

// const URL =
//   "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=" +
//   import.meta.env.VITE_API_KEY;

const Home = () => {
  const [articles, setArticles] = useState(null);

  const country = useSelector((state) => state.country.country);

  console.log(country);

  const search = useSelector((state) => state.search.search);

  useEffect(() => {
    // console.log(search);
    async function fetchArticles() {
      setArticles(null);

      const data = await axios.get(
        `https://gnews.io/api/v4/search?q="${
          search || "example"
        }"&lang=en&country=${country}&max=20&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      // console.log(data.data.articles);
      setArticles(data.data.articles);
      // console.log(search);
      // setArticles(dummyArticles);
    }

    fetchArticles();
  }, [search, country]);

  return (
    <div className="w-screen flex flex-col items-center h-screen">
      <Navbar />
      <TopTags />
      {articles ? (
        <>
          <Main articles={articles} />
          <PopularPosts articles={articles} />
        </>
      ) : (
        <Shimmer />
      )}

      <Footer />
    </div>
  );
};

export default Home;
