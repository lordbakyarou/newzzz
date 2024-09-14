import Main from "../components/Main";
import Navbar from "../components/Navbar";
import PopularPosts from "../components/PopularPosts";
import TopTags from "../components/TopTags";
import { useEffect, useState } from "react";
import axios from "axios";

import { articles } from "../utils/dummyData";
import Footer from "../components/Footer";

const URL =
  "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=" +
  import.meta.env.VITE_API_KEY;

const Home = () => {
  //   const [articles, setArticles] = useState(null);

  //   useEffect(() => {
  //     async function fetchArticles() {
  //       const data = await axios.get(URL);
  //       console.log(data.data);
  //       setArticles(data.data);
  //     }

  //     fetchArticles();
  //   }, []);

  return (
    <div className="w-screen flex flex-col items-center h-screen">
      <Navbar />
      <TopTags />
      <Main articles={articles} />
      <PopularPosts />
      <Footer />
    </div>
  );
};

export default Home;
