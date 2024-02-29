import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './slice/CartSlice'
export const store = configureStore({
    reducer: {
        AllCart: CartReducer,
    },
})