interface product {
  id: number;
  name: string;
  price: number;
}

interface IUpdatePros {
  handleUpdateProducted: (Data: product) => void;
  Data: product;
}

const Update = ({ handleUpdateProducted, Data }: IUpdatePros) => {
  return (
    <div>
      <button
        onClick={() => handleUpdateProducted(Data)}
        className="bg-blue-500 text-white rounded py-2 px-2"
      >
        Sửa
      </button>
    </div>
  );
};

export default Update;
