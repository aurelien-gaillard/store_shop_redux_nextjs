import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../features/header/headerSlice'
import productsReducer from '../features/products/productsSlice'
import filterReducer from '../features/filter/filterSlice'

const store = configureStore({
  reducer: {
    header: headerReducer,
    products: productsReducer,
    filter: filterReducer,
  },
})

export default store
