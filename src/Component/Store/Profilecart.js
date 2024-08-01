import { createSlice } from "@reduxjs/toolkit";

const Profilecart =createSlice({
    name:"profile",
    initialState:{
        profileData:[],
    },
    reducers:{
        setProfileData:(state,action)=>{
            state.profileData=action.payload
        }
    }
})

export default Profilecart.reducer;
export const{setProfileData} =Profilecart.actions