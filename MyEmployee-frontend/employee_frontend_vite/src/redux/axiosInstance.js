import axios from 'axios';

function useAxiosInstance() {
  const token = localStorage.getItem("accessToken");

  const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });

 
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      console.log("Token in request:", token); // Debugging

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return { instance };
}

export default useAxiosInstance;
