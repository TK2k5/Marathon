import { IProduct } from "../interfaces/products.interface";
import { createProduct } from "../apis/products.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddProduct = () => {
  const router = useNavigate();
  const [product, setProduct] = useState({
    name: " ",
    price: 0,
    date: " ",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      name: (product.name = event.target.value),
    });
  };
  const handlepriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      price: (product.price = event.target.valueAsNumber),
    });
  };
  const handledateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      date: (product.date = event.target.value),
    });
  };

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newproduct: Omit<IProduct, "id"> = {
        name: product.name,
        price: product.price,
        date: product.date,
      };
      await createProduct(newproduct);
      router("/products");
      toast.success("Success");
    } catch (error) {
      toast.error("Fail");
      console.log("🚀 ~ handleOnSumit ~ error:", error);
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <h1 className="text-xl font-bold">Add New product</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-5 w-full"
        >
          <h1 className="text-primarydark font-Inter font-medium">Product:</h1>
          <input
            value={product.name}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
            onChange={(event) => handleNameChange(event)}
          />
          <h1 className="text-primarydark font-Inter font-medium">Price:</h1>
          <input
            value={product.price}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="number"
            onChange={(event) => handlepriceChange(event)}
          />
          <h1 className="text-primarydark font-Inter font-medium">Date:</h1>
          <input
            value={product.date}
            className="outline-none border border-gray-200 rounded-lg p-3"
            type="text"
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;