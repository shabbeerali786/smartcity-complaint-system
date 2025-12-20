import axios from "axios";

// Backend illa irundha temp URL use pannunga
const API = axios.create({ baseURL: "http://localhost:5000/api" });

export default API;
