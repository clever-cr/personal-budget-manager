import {configureStore} from "@reduxjs/toolkit"
import expenseSlice from "./expense";


const store = configureStore({
  reducer: {
    expense: expenseSlice
  }
})
export default store