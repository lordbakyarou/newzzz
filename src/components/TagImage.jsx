const TagImage = () => {
  return (
    <div>
      <div className="relative w-28 h-10 rounded-xl bg-cover  bg-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        {/* Lighter Blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs rounded-xl"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex justify-center items-center text-white text-sm ">
          #Food
        </div>
      </div>
    </div>
  );
};

export default TagImage;
