import { configureStore } from "@reduxjs/toolkit";
import { actionReducer } from "./actionSlice";


export const store = configureStore({
    reducer:
    {
      actions: actionReducer  
    }
})