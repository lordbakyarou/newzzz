import Carousel from "./Carousel";
import MainArticle from "./MainArticle";

const Main = ({ articles }) => {
  //   console.log(articles);

  return (
    <div className="w-full p-10 grid grid-cols-3 max-lg:grid-cols-1 gap-4 flex items-center ">
      {articles?.slice(0, 2).map((article) => (
        <MainArticle article={article} key={article.publishedAt} />
      ))}

      <Carousel articles={articles} />
    </div>
  );
};

export default Main;
