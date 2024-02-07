import Plus from "../icons/plus";

interface IHeaderPros {
  Names: string;
  Add: string;
  handleClick: () => void;
}

const Header = ({ Add, Names, handleClick }: IHeaderPros) => {
  return (
    <div className="gap-4 mb-4 flex">
      <div className="font-Inter font-bold text-2xl">{Names}</div>
      <button
        onClick={handleClick}
        className="p-3 rounded-md bg-blue-800 text-white font-Inter hover:opacity-50 flex w-auto"
      >
        <Plus />
        {Add}
      </button>
    </div>
  );
};

export default Header;
