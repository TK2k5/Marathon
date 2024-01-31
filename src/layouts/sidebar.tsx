import Dashboard from "../components/icons/dashboard";
import Excutiveicon from "../components/icons/excutiveicon";
import { Link } from "react-router-dom";
import User from "../components/icons/user";

const Sidebar = () => {
  return (
    <div className="cursor-pointer flex flex-col gap-8 border border-black ml-[50px] mr-[20px] p-2 rounded-lg w-[280px] h-auto">
      <div>
        <div className="border-b border-gray-200 py-1 font-medium	text-base	font-Inter">
          Main
        </div>
        <div className="flex gap-1 mt-2 border-l-2 border-gray-500 p-[10px] text-xl font-Inter font-normal text-primarydark hover:bg-primary hover:rounded-md hover:text-white transition duration-200 ease-in-out">
          <Dashboard />
          <div>Dashboard</div>
        </div>
      </div>
      <div>
        <div className="border-b border-gray-200 py-1 font-medium	text-base	font-Inter">
          User Details
        </div>
        <Link
          to="/users"
          className="flex gap-1 mt-2 border-l-2 border-gray-500 p-[10px] text-xl font-Inter font-normal text-primarydark hover:bg-primary hover:rounded-md hover:text-white transition duration-200 ease-in-out"
        >
          <User />
          <div>Admin</div>
        </Link>
      </div>
      <div>
        <div className="border-b border-gray-200 py-1 font-medium	text-base	font-Inter">
          Executive Details
        </div>
        <Link
          to="/products"
          className="flex gap-1 mt-2 border-l-2 border-gray-500 p-[10px] text-xl font-Inter font-normal text-primarydark hover:bg-primary hover:rounded-md hover:text-white transition duration-200 ease-in-out"
        >
          <Excutiveicon />
          <div>Executive</div>
        </Link>
      </div>
      <div>
        <div className="border-b border-gray-200 py-1 font-medium	text-base	font-Inter">
          Login
        </div>
        <Link
          to="/login"
          className="flex gap-1 mt-2 border-l-2 border-gray-500 p-[10px] text-xl font-Inter font-normal text-primarydark hover:bg-primary hover:rounded-md hover:text-white transition duration-200 ease-in-out"
        >
          <User />
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
