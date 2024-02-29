import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './slice/CartSlice'
import WishlistReducer from './slice/WishlistSlice'
export const store = configureStore({
    reducer: {
        AllCart: CartReducer,
        AllWishlist:WishlistReducer,
    },
})