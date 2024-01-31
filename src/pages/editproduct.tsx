import { getProductById, updateProduct } from "../apis/products.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IProduct } from "../interfaces/products.interface";
import { toast } from "react-toastify";

const EditProduct = () => {
  const router = useNavigate();
  const [product, setproduct] = useState<Omit<IProduct, "id">>({
    name: " ",
    price: 0,
    date: " ",
  });

  const { id: idParams } = useParams();

  useEffect(() => {
    if (idParams) {
      const fetchData = async () => {
        try {
          const response = await getProductById(idParams);
          setproduct(response.data);
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", error);
        }
      };
      fetchData();
    }
  }, [idParams]);

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newproduct: IProduct = {
        id: String(idParams),
        name: product.name,
        price: product.price,
        date: product.date,
      };
      const response = await updateProduct(newproduct);
      console.log("🚀 ~ handleOnSumit ~  response:", response);
      router("/products");
      toast.success("Success");
    } catch (error) {
      toast.error("Fail");
      console.log("🚀 ~ handleOnSumit ~ error:", error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setproduct({
      ...product,
      name: (product.name = event.target.value),
    });
  };
  const handlepriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setproduct({
      ...product,
      price: (product.price = event.target.valueAsNumber),
    });
  };
  const handledateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setproduct({
      ...product,
      date: (product.date = event.target.value),
    });
  };

  return (
    <div className="flex items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <h1 className="text-2xl	font-Inter font-bold">Edit product</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-5 w-full"
        >
          <h1 className="text-primarydark font-Inter font-medium">Name:</h1>
          <input
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            value={product.name}
            onChange={(event) => handleNameChange(event)}
          />
          <h1 className="text-primarydark font-Inter font-medium">Price:</h1>
          <input
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="number"
            value={product.price}
            onChange={(event) => handlepriceChange(event)}
          />
          <h1 className="text-primarydark font-Inter font-medium">Date:</h1>
          <input
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            value={product.date}
            onChange={(event) => handledateChange(event)}
          />
          <div>
            <div>
              <h1 className="text-primarydark font-Inter font-medium">
                Status:
              </h1>
              <div className="flex gap-6 items-center">
                <label className="flex justify-center gap-2">
                  <input
                    type="radio"
                    className="accent-success w-6 h-6"
                    defaultChecked
                  />
                  Active
                </label>
                <label className="flex justify-center gap-2">
                  <input type="radio" className="accent-success w-6 h-6" />
                  Inactive
                </label>
              </div>
            </div>
          </div>
          <button className="text-white font-Inter font-bold bg-primary rounded-lg p-2 w-[200px] hover:opacity-50">
            Edit product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
