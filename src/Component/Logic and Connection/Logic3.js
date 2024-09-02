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

export const BuyBook=async(data)=>{
    console.log(data)
    const response = await axios.put(`${server}/order/api/buyBook/${data}`)
    console.log(response.data);
    return response.data;
}

export const qty=async(link,id)=>{
    console.log(link)
    console.log(id)
    const response = await axios.put(`${server}/order/api/${link}/${id}`)
    console.log(response.data);
    return response.data;
}

export const removecart=async(data)=>{
    console.log(data)
    const response = await axios.delete(`${server}/order/api/remove/${data}`)
    console.log(response.data);
    return response.data;
}

export const cancelorder=async(data)=>{
    console.log(data)
    const response = await axios.delete(`${server}/order/api/cancelOrder/${data}`)
    console.log(response.data);
    return response.data;
}