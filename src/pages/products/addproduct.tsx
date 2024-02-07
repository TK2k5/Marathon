import Button from "../../components/additional/button";
import Check from "../../components/additional/check";
import FormGroup from "../../components/forms/form-group";
import { IProduct } from "../../interfaces/products.interface";
import { InitialInputData } from "./components/utils/init";
import Input from "../../components/forms/input";
import { createProduct } from "../../apis/products.api";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
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

  const init = InitialInputData({ product });

  return (
    <div className="flex items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <h1 className="text-xl font-bold">Add New product</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-5 w-full"
        >
          {init.map((inputItem, index) => (
            <FormGroup Name={inputItem.Name} key={index}>
              <Input
                handleChange={(e) => handleChange(e)}
                name={inputItem.name}
                type={inputItem.type}
                value={inputItem.value}
              />
            </FormGroup>
          ))}
          <div>
            <Check />
          </div>
          <Button infor="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
