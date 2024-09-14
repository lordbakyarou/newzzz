import Carousel from "./Carousel";
import MainArticle from "./MainArticle";

const Main = ({ articles }) => {
  console.log(articles);
  const imgUrl =
    "bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]";
  return (
    <div className="w-full p-10 grid grid-cols-3 gap-4 flex items-center ">
      {articles.slice(0, 2).map((article) => (
        <MainArticle article={article} key={article.publishedAt} />
      ))}

      <Carousel articles={articles} />
    </div>
  );
};

export default Main;
