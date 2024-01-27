import { createSlice } from "@reduxjs/toolkit";
const products=createSlice({
    name:'products',
    initialState:[] as any,
    reducers:{
         addProducts(state,action){
             state.push(action.payload)
         }
    }
})
export const {addProducts} =products.actions;
export default products.reducer