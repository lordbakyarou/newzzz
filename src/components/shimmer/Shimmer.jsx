import ShimmerMain from "./ShimmerMain";
import ShimmerPosts from "./ShimmerPosts";

const Shimmer = () => {
  return (
    <div>
      <div className="w-screen p-10 grid grid-cols-3 gap-4 flex items-center ">
        <ShimmerMain />
        <ShimmerMain />
        <ShimmerMain />
      </div>
      <div className="w-full  p-10 flex flex-col gap-10">
        <div className="text-2xl flex gap-2 items-center font-bold">
          <div className="w-2 h-5 rounded bg-red-500"></div>Popular Posts
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ShimmerPosts />
          <ShimmerPosts />
          <ShimmerPosts />
          <ShimmerPosts />
          <ShimmerPosts />
          <ShimmerPosts />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
