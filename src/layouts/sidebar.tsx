import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="cursor-pointer flex flex-col gap-8 border border-black mt-[200px] mx-1 p-2 rounded-lg">
      <Link
        className=" text-[20px] pl-2 text-red-600 font-bold border-l-4 border-red-500 hover:bg-red-500 hover:text-white transition ease-linear duration-300"
        to="/users"
      >
        User List
      </Link>
      <Link
        className="text-[20px] pl-2 text-red-600 font-bold border-l-4 border-red-500 hover:bg-red-500 hover:text-white transition ease-linear duration-300"
        to="/adduser"
      >
        Add User
      </Link>
      <Link
        className="text-[20px] pl-2 text-red-600 font-bold border-l-4 border-red-500 hover:bg-red-500 hover:text-white transition ease-linear duration-300"
        to="/login"
      >
        Login
      </Link>
    </div>
  );
};

export default Sidebar;
