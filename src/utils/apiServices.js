import axios from "axios";
const API_BASE_URL = "http://localhost:8000/api";

export async function getUsers(page=1,limit=10) {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/getUserDetails`, {
      params: { page, limit },
    });
    console.log("User Fetshc is:", response?.data);
    return response?.data;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response ? error.response.data : error.message
    );
  }
}
