import axios from "axios";
export const server = "http://localhost:8080";

export const userUpload = async (data) => {
  console.log("Uploading data:", data);
  try {
    const response = await axios.post(`${server}/NewUserInfo`, data);
    console.log("Upload successful:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }
  }


};


export const LoginVerification=async(data)=>{
  console.log("Verifying login:", data);
  try {
    const response = await axios.post(`${server}/login`, data);
    console.log("Verification successful:", response.data);
    return response.data;
    
    
  } catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }
  }
}


export const getProfile =async (data)=>{

  try {
    const response = await axios.get(`${server}/profiledetails/${data.email}`);
    console.log("GetProfile successful:", response.data);
    return response.data;

  } catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }
  }

}