import { IProduct } from "./../interfaces/products.interface";
import { instance } from "./instance";

export const getAllProducts = async () => {
  return await instance.get("/products");
};

export const getProductById = async (id: string) => {
  return await instance.get(`/products/${id}`);
};

export const createProduct = async (Product: Omit<IProduct, "id">) => {
  return await instance.post("/products", Product);
};

export const updateProduct = async (Product: IProduct) => {
  return await instance.put(`/products/${Product.id}`, Product);
};

export const deleteProduct = async (id: number | string) => {
  return await instance.delete(`/products/${id}`);
};
