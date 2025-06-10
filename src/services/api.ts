import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getCart = async (token: string) => {
  const response = await axios.get(`${API_URL}/carrito`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const addToCartAPI = async (producto_id: number, cantidad: number, token: string) => {
  const response = await axios.post(
    `${API_URL}/carrito/agregar`,
    { producto_id, cantidad },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const removeFromCartAPI = async (producto_id: number, token: string) => {
  const response = await axios.post(
    `${API_URL}/carrito/quitar`,
    { producto_id },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Si usas fetch:
export async function getProducts() {
  const response = await fetch("http://127.0.0.1:8000/api/productos");
  if (!response.ok) {
    throw new Error("Error al cargar los productos");
  }
  return response.json();
}

// Si usas axios:
// import axios from "axios";
// export const getProducts = async () => {
//   const response = await axios.get("http://127.0.0.1:8000/api/productos");
//   return response.data;
// };