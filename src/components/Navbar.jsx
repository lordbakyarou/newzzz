import Search from "./Search";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full p-5">
      <div className="flex gap-20 items-center">
        <div className="text-orange-500 text-3xl font-bold">Newzzz</div>
        <ul className="flex gap-5 text-md items-center font-semibold">
          <li className="flex items-center">
            <p className="cursor-pointer">Categories</p>
            <MdKeyboardArrowDown className="text-md text-gray-500 hover:text-gray-700 cursor-pointer" />
          </li>
          <li className="flex items-center">
            <p className="cursor-pointer">Pages</p>
            <MdKeyboardArrowDown className="text-md text-gray-500 hover:text-gray-700 cursor-pointer" />
          </li>
          <li className="flex items-center">
            <p className="cursor-pointer">Contact Us</p>
          </li>
          <li className="flex items-center">
            <p className="cursor-pointer">About Us</p>
          </li>
        </ul>
      </div>

      <Search />
    </nav>
  );
};

export default Navbar;
