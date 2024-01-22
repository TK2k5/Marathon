import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-8 bg-emerald-300 flex items-center">
      <div className="cursor-pointer">
        <Link to="/users">Danh sách</Link>
      </div>
    </div>
  );
};

export default Header;
