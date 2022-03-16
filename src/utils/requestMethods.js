import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmY0MDdkYTUyZGEyZDU4MTdmZTc0ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzQzMDI2NSwiZXhwIjoxNjQ3Njg5NDY1fQ.LJxHnP7QFfTE1wPuozGH_JISRYoJZ9EWt9xpumzgTYY"




export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});