import axios from 'axios'

const API_URL = 'http://localhost:3000/api' // Cambia esta URL por la de tu backend

// Obtener todos los productos
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`)
  return response.data
}

// Obtener un producto por ID
export const getProductById = async (id: string) => {
  const response = await axios.get(`${API_URL}/products/${id}`)
  return response.data
}

// Crear un producto
export const createProduct = async (product: any) => {
  const response = await axios.post(`${API_URL}/products`, product)
  return response.data
}

// Actualizar un producto
export const updateProduct = async (id: string, product: any) => {
  const response = await axios.put(`${API_URL}/products/${id}`, product)
  return response.data
}

// Eliminar un producto
export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${API_URL}/products/${id}`)
  return response.data
}