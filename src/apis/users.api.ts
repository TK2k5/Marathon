import { IAddUser, IUsers } from "./../interfaces/users.interface";

import { instance } from "./instance";

export const getAllUsers = async () => {
  return await instance.get("/user");
};

export const getUserById = async (id: string) => {
  return await instance.get(`/user/${id}`);
};

export const createUser = async (user: Omit<IAddUser, "id">) => {
  return await instance.post("/user", user);
};

export const updateUser = async (user: IUsers) => {
  return await instance.put(`/user/${user.id}`, user);
};

export const deleteUser = async (id: number | string) => {
  return await instance.delete(`/user/${id}`);
};
