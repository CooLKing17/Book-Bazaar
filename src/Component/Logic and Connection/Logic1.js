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

export const DonateBookData=async(data)=>{
    const userID = localStorage.getItem("UserId")
    try{
        const response = await axios.post(`${server}/donateBook/api/donate/${userID}`,data);
        console.log(response.data); // Log the actual data, not the entire response object
    }
    catch(error){
        console.error("Error fetching book details:", error);
    }

}

export const GetData = async (api) => {
  const userID = localStorage.getItem("UserId");
console.log(api);
  if (userID) {
    try {
      const response = await axios.get(`${server}/${api}/${userID}`);
      console.log(response);
      return response.data; // Returning the data portion of the response
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Return null or an appropriate value if an error occurs
    }
  } else {
    console.log("User ID is not available in localStorage");
    return null; // Return null if userID is not found
  }
};

export const EditBook =async(id ,data)=>{
  console.log(id)
  const userID = localStorage.getItem("UserId")
    if(userID){
      try{
        const response = await axios.put(`${server}/sellBook/api/editBook/${id}`,data);
        console.log(response.data); // Log the actual data, not the entire response object
        return response.data;
      }catch(error){
        console.log("Error fetching book details:", error);
      }
    }
    else{
        console.log("Error fetching book details:");
        return null;
    }

}

export const DeleteBook=async(id)=>{
  console.log(id)
    try{
        const response = await axios.delete(`${server}/sellBook/api/DeleteBook/${id}`);
        console.log(response.data); // Log the actual data, not the entire response object
        return response.data;
    }
    catch(error){
        console.log("Error fetching book details:", error);
    }
}