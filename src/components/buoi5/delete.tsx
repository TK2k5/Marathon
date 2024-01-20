interface product {
  id: number;
  name: string;
  price: number;
}

interface IDeletePros {
  handleDeleted: (Data: product) => void;
  Data: product;
}

const Delete = ({ handleDeleted, Data }: IDeletePros) => {
  return (
    <div>
      <button
        onClick={() => handleDeleted(Data)}
        className="bg-red-500 text-white rounded py-2 px-2"
      >
        Xóa
      </button>
    </div>
  );
};

export default Delete;
