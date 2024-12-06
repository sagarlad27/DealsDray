import axios from "axios";
import useAxiosInstance from "../redux/axiosInstance";

const API_URL = "http://localhost:5000";

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}




const login = async (username, password) => {
  try {
    const { instance } = useAxiosInstance();
    const payload = {
      "email": username,
      "password": password
    };

    const response = await instance.post("/api/user/login", payload);
    if (response.status === 200) {
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("accessToken", response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    console.error("Login error: ", error);
    throw new Error(error.response ? error.response.data.message : "An error occurred during login.");
  }
};



export default {
  login,
  
};