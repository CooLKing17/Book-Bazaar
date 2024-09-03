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

export const ratingStar=(rating)=>{
    const stars=[];
    console.log("inn")
    console.log(rating)
    const num = parseInt(rating,10)
    console.log(num)
    for (let i=0 ; i < num ;i++){
        stars.push(
        // <img key={i} src={StarIm} alt="star" className="inline-block w-4 h-4" />
        <svg className="w-4 " viewBox="0 0 576 512"><path className="flex flex-wrap" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
        )
    }
    return stars
  }