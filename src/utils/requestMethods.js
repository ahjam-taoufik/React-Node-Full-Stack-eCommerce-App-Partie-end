import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmY0MDdkYTUyZGEyZDU4MTdmZTc0ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzQ1NTkzMSwiZXhwIjoxNjQ3NzE1MTMxfQ.i2fVZUMUiIXmHCf1Q6hAb5ktfGIccqzv442a8-Hbx1U"




export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});