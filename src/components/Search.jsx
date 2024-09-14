import { IoIosSearch } from "react-icons/io";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";

const Search = ({ search, setSearch, onSearch }) => {
  const [inputValue, setInputValue] = useState(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the search action with the current input value
    setSearch(inputValue);
    if (onSearch) {
      onSearch(inputValue); // Optional callback for parent component
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center max-w-sm">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-100 border-t border-l border-b border-gray-300 placeholder-gray-700 text-gray-900 text-sm rounded-lg block w-full focus:outline-none focus:ring-0 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search news..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="p-3.5 text-sm font-medium text-white bg-gray-300 hover:bg-gray-600 rounded-lg border dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <IoIosSearch />
        <span className="sr-only">Search</span>
      </button>
      <LanguageSelector />
    </form>
  );
};

export default Search;
