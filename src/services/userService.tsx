import axios from "axios"
import type { User } from "../types/user"

const API_URL = "http://localhost:8080/admin/users"

export const getAllUsers = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const createUser = async (user: User) => {
  const response = await axios.post(API_URL, user)
  return response.data
}

export const getUserById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}