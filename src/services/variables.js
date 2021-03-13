export const isProd = process.env.NODE_ENV === "production";
export const base_url = isProd
  ? "https://nutrismartjoin.herokuapp.com/"
  : "http://localhost:3001/api";