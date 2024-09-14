import Main from "../components/Main";
import Navbar from "../components/Navbar";
import PopularPosts from "../components/PopularPosts";
import TopTags from "../components/TopTags";
import { useEffect, useState } from "react";
import axios from "axios";

// import { articles } from "../utils/dummyData";
import Footer from "../components/Footer";

// const URL =
//   "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=" +
//   import.meta.env.VITE_API_KEY;

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [search, setSearch] = useState("");
  const [language, setlanguage] = useState("en");

  useEffect(() => {
    // console.log(search);
    async function fetchArticles() {
      const data = await axios.get(
        `https://gnews.io/api/v4/search?q="${
          search || "example"
        }"&lang=${language}&country=in&max=20&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      //   console.log(data.data.articles);
      setArticles(data.data.articles);
    }

    fetchArticles();
  }, [search]);

  return (
    <div className="w-screen flex flex-col items-center h-screen">
      <Navbar search={search} setSearch={setSearch} />
      <TopTags />
      <Main articles={articles} />
      <PopularPosts articles={articles} />
      <Footer />
    </div>
  );
};

export default Home;
