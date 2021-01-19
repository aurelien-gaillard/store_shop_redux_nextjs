import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  featured_products: [],
  status: 'idle', //idle, loading, succeeded, failed
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(
      'https://course-api.com/react-store-products'
    )
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.products = action.payload
      state.featured_products = action.payload.filter(
        (product) => product.featured === true
      )
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

//export const { openSidebar, closeSidebar } = headerSlice.actions

export default productsSlice.reducer
