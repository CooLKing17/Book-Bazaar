import axios from "axios";
import { server } from "./Logic";


export const getData=async(bookId)=>{

    if (typeof bookId !== 'number' || isNaN(bookId)) {
        console.error("Invalid Book ID:", bookId);
        return; // Or handle this case as needed
      }
    
      try {
        const response = await axios.get(`${server}/sellbook/getbookDetails/${bookId}`);
        console.log("GetProfile successful:", response.data);
        return response.data; // Returning only the data part
      } catch (error) {
        console.error("Error fetching book details:", error);
        // Handle the error appropriately
      }
}