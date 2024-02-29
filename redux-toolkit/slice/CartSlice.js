import { createSlice } from "@reduxjs/toolkit";


// const cartDataFromLocalStorage = localStorage.getItem("cartData");
// cartItem: JSON.parse(cartDataFromLocalStorage) ? JSON.parse(cartDataFromLocalStorage) : [],

const initialState = {
    cartItem:  [],
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, qty } = action.payload;
            const existingItem = state.cartItem.find((item) => item.id === id);
            if (existingItem) {
                existingItem.qty += qty;
            } else {
                state.cartItem.push(action.payload);
            }
            // localStorage.setItem("cartData", JSON.stringify(state.cartItem));
        },
        removeToCart(state, action) {
            const itemIdToRemove = action.payload;
            state.cartItem = state.cartItem.filter((item) => item.id !== itemIdToRemove);
            // localStorage.setItem("cartData", JSON.stringify(state.cartItem));
        },
        incrementQty(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.cartItem.find((item) => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.qty += 1;
                // localStorage.setItem("cartData", JSON.stringify(state.cartItem));
            }
        },
        decrementQty(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.cartItem.find((item) => item.id === itemId);
            if (itemToUpdate && itemToUpdate.qty > 1) {
                itemToUpdate.qty -= 1;
                // localStorage.setItem("cartData", JSON.stringify(state.cartItem));
            }
        },
    },
});

export default CartSlice.reducer;
export const { addToCart, removeToCart, incrementQty, decrementQty } = CartSlice.actions;
