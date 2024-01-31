import { Link, useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../apis/products.api";
import { useEffect, useState } from "react";

import { IProduct } from "../interfaces/products.interface";
import Pen from "../components/icons/pen";
import Plus from "../components/icons/plus";
import Trash from "../components/icons/trash";
import { toast } from "react-toastify";

const Products = () => {
  const router = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        setProduct(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };
    fetchData();
  }, []);

  const [product, setProduct] = useState<IProduct[]>([]);

  const handleClick = () => {
    router("/addproduct");
  };

  const handleDelete = async (idProduct: number | string) => {
    try {
      await deleteProduct(idProduct);
      const newProductList = product.filter((value) => value.id !== idProduct);
      setProduct(newProductList);
      toast.success("Success");
    } catch (error) {
      toast.error("Fail");
      console.log("🚀 ~ handleDelete ~ error:", error);
    }
  };

  return (
    <div className="mx-[20px] flex flex-col justify-center">
      <div className="gap-4 mb-4 flex">
        <div className="font-Inter font-bold text-2xl">Products</div>
        <button
          onClick={handleClick}
          className="p-3 rounded-md bg-blue-800 text-white font-Inter hover:opacity-50 flex w-auto"
        >
          <Plus />
          Add Product
        </button>
      </div>

      <div className="min-h-screen flex flex-col items-center">
        <div className="relative w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 border border-black">ProductName</th>
                <th className="px-6 py-3 border border-black">Price</th>
                <th className="px-6 py-3 border border-black ">Date</th>
                <th className="px-6 py-3 border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.length > 0 &&
                product.map((data) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={data.id}
                    >
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
                          to={`/editProduct/${data.id}`}
                          className="bg-blue-500 text-white py-2 px-2 rounded-md mt-2"
                        >
                          <Pen />
                        </Link>
                        <button
                          className="bg-red-500 text-white py-2 px-2 rounded-md mt-2"
                          onClick={() => handleDelete(data.id)}
                        >
                          <Trash />
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
