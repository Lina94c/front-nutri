import axios from "axios"
const baseURL =
  process.env.NODE_ENV === "production" ? "/plan" : "http://localhost:3001/plan"

const _axios = axios.create({
  baseURL,
  // Tenemos que enviar esta configuracion si el endpoint al que accedemos utiliza la sesion del server,  o sea si vamos a usar al req.user del backend.
  withCredentials: true
})


export const createPlan = (planData) => _axios.post("/plan/create", planData);
export const getAllPlanes = () => _axios.get(`/planes/all`);
export const getPlanById = (planId) => _axios.get(`/${planId}`);
export const updatePlan = (planId) =>_axios.patch(`/book/update/${planId}`);
export const deletePlan = (planId) => _axios.delete(`/book/delete/${planId}`);
export const uploadImages = (image, planId) => _axios.post(`/book/upload/${planId}`, image);