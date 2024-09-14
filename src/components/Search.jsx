import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <form className="flex items-center max-w-sm">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-100 border border-gray-300 placeholder-gray-700 text-gray-900 text-sm rounded-lg  block w-full focus:outline-none  focus:ring-0 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Search branch name..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-gray-300 hover:bg-gray-600 rounded-lg border hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 "
      >
        <IoIosSearch />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Search;
