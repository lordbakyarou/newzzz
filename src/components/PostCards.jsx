import { FaRegBookmark } from "react-icons/fa6";
import transformDates from "../utils/transformDates";

const PostCards = ({ article }) => {
  const { description, image, url, content, source, publishedAt } = article;

  const getSourceLogo = (sourceUrl) => {
    const domain = new URL(sourceUrl).hostname;
    return `https://logo.clearbit.com/${domain}`;
  };

  return (
    <div className="bg-gray-50 p-1 flex flex-col rounded-lg shadow-md">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={image}
        alt="Post"
      />
      <div className="flex flex-col gap-2 p-2">
        <h1 className="truncate text-lg font-semibold">{content}</h1>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-xl object-cover"
            src={getSourceLogo(source?.url)}
            alt={source?.name}
          />
          <div className="flex flex-col">
            <a
              className="font-semibold text-sm"
              href={source?.url}
              target="_blank"
            >
              {source?.name}
            </a>
            <p className="text-xs text-gray-600">
              {transformDates(publishedAt)}
            </p>
          </div>
        </div>
        <FaRegBookmark className="text-xl text-gray-500 hover:text-blue-500" />
      </div>
    </div>
  );
};

export default PostCards;
