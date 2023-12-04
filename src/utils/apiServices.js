import axios from "axios";
const API_BASE_URL = "http://localhost:8000/api";

export async function getUsers() {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/getUserDetails`);
    console.log("User Fetshc is:", response?.data);
    return response?.data;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response ? error.response.data : error.message
    );
  }
}
