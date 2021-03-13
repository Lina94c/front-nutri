import axios from "axios"
const baseURL =
  process.env.NODE_ENV === "production" ? "/api/alimento" : "http://localhost:3001/api/alimento"

const _axios = axios.create({
  baseURL,
  // Tenemos que enviar esta configuracion si el endpoint al que accedemos utiliza la sesion del server,  o sea si vamos a usar al req.user del backend.
  withCredentials: true
})


export const createAlimento = (alimentoData) => _axios.post("/create", alimentoData);
export const getAllAlimentos = () => _axios.get(`/alimentos/all`);
export const getAlimentoById = (alimentoId) => _axios.get(`/${alimentoId}`);
export const updateAlimento = (alimentoId,) =>_axios.patch(`update/${alimentoId}`);
export const deleteAlimento = (alimentoId) => _axios.delete(`/delete/${alimentoId}`);
export const uploadImages = (image, alimentoId) => _axios.post(`/upload/${alimentoId}`, image);