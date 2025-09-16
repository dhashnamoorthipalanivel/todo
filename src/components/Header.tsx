import logo from "../assets/img/logo.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

type HeaderProps = {
  searchQuery: string,
  setSearchQuery: (value: string) => void
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 object-cover rounded-full"
        />
        <h3 className="text-2xl font-bold text-black">Todo List</h3>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border-2 border-gray-100 rounded px-2 py-1 bg-white w-64 focus-within:border-violet-600">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            className="outline-none w-full"
            onChange={((e) => setSearchQuery(e.target.value))}
          />
          <RiSearchLine className="text-gray-500 text-xl ml-2" />
        </div>
        <IoSettingsOutline className="text-2xl text-gray-600 cursor-pointer hover:text-violet-600 transition" />
        <IoMdNotificationsOutline className="text-2xl text-gray-600 cursor-pointer hover:text-violet-600 transition" />
      </div>
    </div>
  );
};

export default Header;
