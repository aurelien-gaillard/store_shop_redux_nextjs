import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  product: [],
  status: 'idle', //idle, loading, succeeded, failed
  error: null,
}

export const fetchSingleProduct = createAsyncThunk(
  'single_product/fetchSingleProduct',
  async (id) => {
    const response = await axios.get(
      `https://course-api.com/react-store-single-product?id=${id}`
    )
    return response.data
  }
)

const singleProductSlice = createSlice({
  name: 'single_product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleProduct.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.product = action.payload
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export default singleProductSlice.reducer
