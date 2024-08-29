import axios from "axios";
import { server } from "./Logic";

export const addCart=async(data)=>{
    const userID = localStorage.getItem("UserId")
    try{
        const response = await axios.post(`${server}/order/api/addOrder/${data}/${userID}`);
        console.log(response.data);
        return response.data; // Log the actual data, not the entire response object
    }
    catch(error){
        console.error("Error fetching book details:", error);
    }
}

export const GetOrderData=async()=>{
    const userID = localStorage.getItem("UserId")
    try{
        const response = await axios.get(`${server}/order/api/orderData/${userID}`);
        console.log(response.data);
        return response.data; // Log the actual data, not the entire response object
    }
    catch(error){
        console.error("Error fetching book details:", error);
    }
}