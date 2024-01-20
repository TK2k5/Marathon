interface IInputPros {
  Name: string;
  Price: number;
  handleOnChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceOnChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  Name,
  Price,
  handleOnChanged,
  handlePriceOnChanged,
}: IInputPros) => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        className="border border-gray-200 rounded py-2 px-2 w-full  "
        placeholder="Nhập tên"
        value={Name}
        onChange={(event) => handleOnChanged(event)}
      />
      <input
        type="number"
        className="border border-gray-200 rounded py-2 px-2 w-full  "
        placeholder="Nhập giá"
        value={Price}
        onChange={(event) => handlePriceOnChanged(event)}
      />
    </div>
  );
};

export default Input;
