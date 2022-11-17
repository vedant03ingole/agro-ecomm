import { configureStore } from '@reduxjs/toolkit'
import  calcReducer from './calcStore'


export default configureStore({
  reducer: {
    calc: calcReducer
  }
})