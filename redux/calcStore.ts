import { createSlice } from '@reduxjs/toolkit'


type InitialState = {
    value: number
}

const initialState: InitialState = {
    value: 0
}


const calcSlice = createSlice({
    name: "calc",
    initialState,
    reducers: {    
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})


export const { increment, decrement } = calcSlice.actions
export default calcSlice.reducer