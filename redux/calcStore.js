import { createSlice } from '@reduxjs/toolkit'


const calcSlice = createSlice({
    name: "calc",
    initialState: {
        value: 0
    },
    reducers: {    
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})


export const { increment, decrement } = calcSlice.actions
export default calcSlice.reducer