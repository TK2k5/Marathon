import { IProduct } from "./../../../../interfaces/products.interface";

interface IInitialInputData {
  product: Omit<IProduct, "id">;
}

export const InitialInputData = ({ product }: IInitialInputData) => {
  const initial = [
    {
      Name: "ProductName:",
      name: "name",
      type: "text",
      value: product.name,
    },
    {
      Name: "Price:",
      name: "price",
      type: "number",
      value: product.price,
    },
    {
      Name: "Date:",
      name: "date",
      type: "text",
      value: product.date,
    },
  ];
  return initial;
};
