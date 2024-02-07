import { deleteProduct, getAllProducts } from "../../apis/products.api";
import { useEffect, useState } from "react";

import Header from "../../components/header/header";
import { IProduct } from "../../interfaces/products.interface";
import ModalDelete from "../../components/modals/modaldelete";
import ProductLine from "./components/product-line";
import TableTh from "../../components/table/table-th";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const router = useNavigate();
  const [showModal, SetShowModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    SetShowModal(false);
  };

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
      SetShowModal(false);

      toast.success("Success");
    } catch (error) {
      toast.error("Fail");
      console.log("🚀 ~ handleDelete ~ error:", error);
    }
  };

  return (
    <div className="mx-[20px] flex flex-col justify-center">
      <Header Add="Add Product" Names="Products" handleClick={handleClick} />

      <div className="min-h-screen flex flex-col items-center">
        <div className="relative w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <TableTh th1="ProductName" th2="Price" th3="Date" th4="Modify" />
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
                      <ProductLine
                        data={data}
                        SetShowModal={() => SetShowModal(true)}
                      />
                      <ModalDelete
                        visible={showModal}
                        onClose={handleCloseModal}
                        handleModalDelete={handleDelete}
                        id={data.id}
                        name="Product"
                      />
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
