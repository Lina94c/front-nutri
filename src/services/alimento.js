import axios from "axios"
const baseURL =
  process.env.NODE_ENV === "production" ? "/alimento" : "http://localhost:3001/alimento"

const _axios = axios.create({
  baseURL,
  // Tenemos que enviar esta configuracion si el endpoint al que accedemos utiliza la sesion del server,  o sea si vamos a usar al req.user del backend.
  withCredentials: true
})


export const createAlimento = (alimentoData) => _axios.post("/alimento/create", alimentoData);
export const getAllAlimentos = () => _axios.get(`/alimentos/all`);
export const getAlimentoById = (alimentoId) => _axios.get(`/${alimentoId}`);
export const updateAlimento = (alimentoId,) =>_axios.patch(`/book/update/${alimentoId}`);
export const deleteAlimento = (alimentoId) => _axios.delete(`/book/delete/${alimentoId}`);
export const uploadImages = (image, alimentoId) => _axios.post(`/book/upload/${alimentoId}`, image);