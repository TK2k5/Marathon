interface IInputPros {
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
}

const Input = ({ value, handleChange, name, type }: IInputPros) => {
  return (
    <input
      value={value}
      name={name}
      className="outline-none border border-gray-200 rounded-lg p-3"
      type={type}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default Input;
