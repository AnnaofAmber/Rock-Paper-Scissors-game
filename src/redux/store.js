import { configureStore } from "@reduxjs/toolkit";
import { actionReducer } from "./actionSlice";
import { pickedActionReducer } from "./pickedActionSlice";
import { statusReducer } from "./statusSlice";


export const store = configureStore({
    reducer:
    {
      actions: actionReducer, 
      pickedActions: pickedActionReducer,
      status: statusReducer
    }
})