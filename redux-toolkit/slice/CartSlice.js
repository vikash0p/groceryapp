const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    cartItem: [],
}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action.payload)
            try {
                const cartIsExist = state.cartItem.find(value => value.id === action.payload.id);
                if (cartIsExist) {
                    state.cartItem = state.cartItem.map((value, indx) => value.id === action.payload.id ? { ...value, qty: value.qty + 1 } : value)
                } else {
                     state.cartItem.push(action.payload);
                }

            } catch (error) {
                console.log(error)

            }


        },
        removeToCart(state, action) {
            try {
                state.cartItem=state.cartItem.filter(value=>value.id !==action.payload)

            } catch (error) {
                console.log(error)

            }

        },
        incrementQty(state, action) {
            state.cartItem = state.cartItem.map((value) => value.id === action.payload? { ...value, qty: value.qty + 1 } : value)
        },
        decrementQty(state, action) {
            state.cartItem = state.cartItem.map((value) => value.id === action.payload ? { ...value, qty: value.qty - 1 } : value)


        }

    }
})

export default CartSlice.reducer;
export const { addToCart, removeToCart, incrementQty, decrementQty } = CartSlice.actions;