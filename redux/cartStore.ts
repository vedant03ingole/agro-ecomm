import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    cart: Object,
    pending: Boolean,
    error: Boolean 
}

const initialState: InitialState = {
    cart: {},
    pending: false,
    error: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateStart: (state) => {
            state.pending = true
        },
        getCart: (state, action) => {
            state.pending = false
            state.cart = action.payload

        }
    }
})


export const {updateStart, getCart} = cartSlice.actions
export default cartSlice.reducer