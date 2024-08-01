import { configureStore } from "@reduxjs/toolkit";
import Profilecart from "./Profilecart";


const Store = configureStore({
    reducer: {
        profile:Profilecart,
    }
})

export default Store;