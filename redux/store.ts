import { configureStore } from '@reduxjs/toolkit'
import  calcReducer from './calcStore'
import cartSlice from './cartStore'


export const store = configureStore({
  reducer: {
    calc: calcReducer,
    cart: cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch