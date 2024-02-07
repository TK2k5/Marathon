import { IAddUser } from "../../../../interfaces/users.interface";

interface IInitialInputData {
  user: Omit<IAddUser, "id">;
}

export const InitialInputData = ({ user }: IInitialInputData) => {
  const initial = [
    {
      Name: "UserName:",
      name: "username",
      type: "text",
      value: user.username,
    },
    {
      Name: "Age:",
      name: "age",
      type: "number",
      value: user.age,
    },
    {
      Name: "Address:",
      name: "address",
      type: "text",
      value: user.address,
    },
  ];
  return initial;
};
