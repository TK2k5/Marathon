import { IProduct } from "../../../interfaces/products.interface";
import { Link } from "react-router-dom";
import Pen from "../../../components/icons/pen";
import Trash from "../../../components/icons/trash";

interface IProductLinePros {
  data: IProduct;
  SetShowModal: () => void;
}

const ProductLine = ({ data, SetShowModal }: IProductLinePros) => {
  return (
    <>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.name}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.price}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.date}
      </th>
      <th className="flex gap-4 justify-center items-center">
        <Link
          to={`/editproduct/${data.id}`}
          className="bg-blue-500 text-white py-2 px-2 rounded-md mt-2"
        >
          <Pen />
        </Link>
        <button
          className="bg-red-500 text-white py-2 px-2 rounded-md mt-2"
          onClick={() => SetShowModal()}
        >
          <Trash />
        </button>
      </th>
    </>
  );
};

export default ProductLine;
