import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../features/header/headerSlice'
import productsReducer from '../features/products/productsSlice'
import filterReducer from '../features/filter/filterSlice'
import singleProductReducer from '../features/single_product/singleProductSlice'
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    header: headerReducer,
    products: productsReducer,
    filter: filterReducer,
    single_product: singleProductReducer,
    cart: cartReducer,
  },
})

export default store
