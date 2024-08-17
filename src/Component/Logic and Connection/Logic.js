import axios from "axios";
export const server = "http://localhost:8080";
export const UserId=localStorage.getItem("UserId");
console.log(UserId)
// User logic only 
export const userUpload = async (data) => {
  console.log("Uploading data:", data);
  try {
    const response = await axios.post(`${server}/user/api/UserAdd`, data);
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
    const response = await axios.post(`${server}/user/api/login`, data);
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
    const response = await axios.get(`${server}/user/api/profiledetails/${data}`);
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

export const ChangePassword=async(data)=>{
  console.log(data)
  try {
      const response = await axios.put(`${server}/user/api/updatePassword/${UserId}`,data)
      console.log("ChangePassword successful:", response.data);
      return response.data;
  }
  catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }
  }
}

export const DeleteAccount = async (data) => {
  const id = localStorage.getItem("UserId")
  console.log(UserId);
  console.log(data);
  try {
    const response = await axios.delete(`${server}/user/api/deleteProfile/${id}`, {
      data: data, // Include the data object in the 'data' field of the options object
      headers: {
        'Content-Type': 'application/json', // Ensure correct content type is set
      },
    });
    console.log("DeleteAccount successful:", response.data);
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

export const handleEditClick=async (data)=>{

  try {
    console.log(UserId);
    const response = await axios.put(`${server}/user/api/updateProfile/${UserId}`,data)
    console.log("handleEditClick successful:", response.data);
    return response.data;
  }
  catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error setting up request:", error.message);
    }
  }
}