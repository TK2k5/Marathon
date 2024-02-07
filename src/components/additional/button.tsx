interface IButtonPros {
  className?: string;
  infor: string;
}

const Button = ({ className, infor }: IButtonPros) => {
  return (
    <button
      className={`text-white font-Inter font-bold bg-primary rounded-lg p-2 w-[200px] hover:opacity-50 ${
        className !== undefined ? className : ""
      }`}
    >
      {infor}
    </button>
  );
};

export default Button;
