import { configureStore } from "@reduxjs/toolkit";
import { actionReducer } from "./actionSlice";
import { pickedActionReducer } from "./pickedActionSlice";


export const store = configureStore({
    reducer:
    {
      actions: actionReducer, 
      pickedActions: pickedActionReducer
    }
})