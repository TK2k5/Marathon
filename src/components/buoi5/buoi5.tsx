import { useState } from "react";
import Input from "./input";
import Create from "./create";
import Update from "./update";
import Delete from "./delete";

interface product {
  id: number;
  name: string;
  price: number;
}

const Buoi5 = () => {
  const arrayData: product[] = [
    { id: 1, name: "iphone", price: 1000 },
    { id: 2, name: "samsung", price: 1200 },
  ];
  const [arrayProduct, setArrayProduct] = useState(arrayData);
  const [nameProduct, setNameProduct] = useState<string>("");
  const [priceProduct, setPriceProduct] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [idProduct, setIdProcduct] = useState<number>(0);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNameProduct(value);
  };

  const handlePriceOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    setPriceProduct(value);
  };

  const handleAddProduct = () => {
    if (isEdit == true) {
      const newProduct: product = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
      };
      const newData = arrayProduct.map((itemProduct) => {
        if (itemProduct.id == idProduct) {
          return newProduct;
        }
        return itemProduct;
      });
      setArrayProduct(newData);

      setNameProduct("");
      setPriceProduct(0);
      setIsEdit(false);
      setIdProcduct(0);
    } else {
      const newProduct: product = {
        id: Math.random(),
        name: nameProduct,
        price: priceProduct,
      };

      const newArrayData = [...arrayProduct, newProduct];
      setArrayProduct(newArrayData);
      setNameProduct("");
      setPriceProduct(0);
      setIsEdit(false);
      setIdProcduct(0);
    }
  };

  const handleDelete = (product: product) => {
    const newData = arrayProduct.filter((item) => {
      if (item.id != product.id) return item;
    });
    setArrayProduct(newData);
  };

  const handleUpdateProduct = (product: product) => {
    setNameProduct(product.name);
    setPriceProduct(product.price);
    setIsEdit(true);
    setIdProcduct(product.id);
  };
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[500px] bg-white">
        <h1 className="text-lg text-center">Thêm - Sửa - Xóa</h1>

        <div className="w-full flex items-center gap-4">
          <div className="flex items-center justify-between">
            <Input
              Name={nameProduct}
              Price={priceProduct}
              handleOnChanged={handleOnChange}
              handlePriceOnChanged={handlePriceOnChange}
            />
          </div>
          <Create handleAddProducted={handleAddProduct} isEdited={isEdit} />
        </div>

        <div>
          {arrayProduct.map((data) => (
            <div key={data.id} className="flex items-center">
              <div className="flex-1">
                <h2>{data.name}</h2>
                <p>{data.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <Update
                  handleUpdateProducted={handleUpdateProduct}
                  Data={data}
                />
                <Delete handleDeleted={handleDelete} Data={data} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buoi5;
