import axios from "axios";
import { server } from "./Logic";


 

export const getData = async () => {
  try {
    const response = await axios.get(`${server}/sellBook/api/getAllBooks`);
    console.log(response.data); // Log the actual data, not the entire response object
    return response.data; // Return the data, not the response object
  } catch (error) {
    console.error("Error fetching book details:", error);
    return []; // Return an empty array or handle it as per your application's need
  }
};