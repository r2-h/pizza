import { CartDTO } from "./cart.dto"
import { axiosInstance } from "./instance"

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data
}

export const updateCartItem = async (cartId: number, quantity: number) => {
  return (await axiosInstance.patch<CartDTO>(`/cart/${cartId}`, { quantity })).data
}
