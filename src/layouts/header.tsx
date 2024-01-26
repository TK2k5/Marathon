import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-8 flex items-center gap-5  border-b-4 border-black">
      <img
        className="h-[100px] w-[100px] flex-none"
        src=".\src\assets\logo.jpg"
        alt="logo"
      />
      <div className="cursor-pointer flex gap-8 flex-1">
        <Link
          className="text-[30px] font-bold border-b-4 border-red-500"
          to="/users"
        >
          Danh sách
        </Link>
        <Link
          className="text-[30px] font-bold border-b-4 border-red-500"
          to="/adduser"
        >
          Thêm người dùng
        </Link>
        <Link
          className="text-[30px] font-bold border-b-4 border-red-500"
          to="/login"
        >
          Đăng nhập
        </Link>
      </div>

      <div className="flex gap-4 bg-[#F60621] text-white px-6 py-2 rounded-xl cursor-pointer shadow shadow-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p>User</p>
      </div>
    </div>
  );
};

export default Header;
