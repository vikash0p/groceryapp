const { createSlice, current } = require("@reduxjs/toolkit");

const initialState = {
    wishlistArr: JSON.parse(localStorage.getItem("wishlist")) ? JSON.parse(localStorage.getItem("wishlist")) :  [],

}
const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {

            const existWishlist=state.wishlistArr.find((value)=>value.id === action.payload.id);
            if(existWishlist){
                return
            }
            else{
                state.wishlistArr.push(action.payload);
                // let wishlistData=JSON.stringify(current(state.wishlistArr));
                // localStorage.setItem("wishlist",wishlistData)
                localStorage.setItem("wishlist", JSON.stringify(state.wishlistArr));


            }



        },
        removeToWishlist(state, action) {
            state.wishlistArr = state.wishlistArr.filter((value) => value.id !== action.payload)
            localStorage.setItem("wishlist", JSON.stringify(state.wishlistArr));
            // let wishlistData = JSON.stringify(current(state.wishlistArr));
            // localStorage.setItem("wishlist", wishlistData)


        }

    }
})

export default WishlistSlice.reducer;
export const { addToWishlist, removeToWishlist } = WishlistSlice.actions