import { IUserCreate } from '@/types'
import { instance } from '.'

export const createUser = async (data: IUserCreate) => {
  return await instance.post('./user', data)
}

export const getUsers = async () => {
  return await instance.get('./user')
}

export const deleteUser = async (id: number | string) => {
  return await instance.delete(`/user/${id}`)
}

export const editUser = async (id: number | string, data: IUserCreate) => {
  return await instance.put(`/user/${id}`, data)
}

export const getOneUser = async (id: number | string) => {
  return await instance.get(`/user/${id}`)
}
