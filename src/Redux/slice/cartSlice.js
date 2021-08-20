import { createSlice } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "../action/cartAction";

const initialState = {
    cartItems:[]
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItemToCart:(state, action) => {
            state.cartItems = addToCart(state.cartItems, action.payload)
        },
        removeItemFromCart:(state, action) => {
            state.cartItems = removeFromCart(state.cartItems, action.payload)
        }
    }
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;
export const selectState = (state) => state;
export default cartSlice.reducer;