import LogoPage from "../components/icons/LogoPage";

const Header = () => {
  return (
    <div className="w-full py-[15px] px-[50px] flex flex-row items-center border-b-4 border-black justify-between">
      <div>
        <LogoPage />
      </div>
      <div className="flex gap-4 bg-primary w-[163px] rounded-lg p-[10px] justify-center text-center text-white font-Inter font-semibold text-2xl shadow-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
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
