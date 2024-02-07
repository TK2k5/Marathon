import { getProductById, updateProduct } from "../../apis/products.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/additional/button";
import Check from "../../components/additional/check";
import FormGroup from "../../components/forms/form-group";
import { IProduct } from "../../interfaces/products.interface";
import { InitialInputData } from "./components/utils/init";
import Input from "../../components/forms/input";
import { toast } from "react-toastify";

const EditProduct = () => {
  const router = useNavigate();
  const [product, setProduct] = useState<Omit<IProduct, "id">>({
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
          setProduct(response.data);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const init = InitialInputData({ product });

  return (
    <div className="flex items-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <h1 className="text-2xl	font-Inter font-bold">Edit product</h1>
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
          <Button infor="Edit User" />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
