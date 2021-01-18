import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openSidebar(state, action) {
      state.isOpen = true
    },
    closeSidebar(state, action) {
      state.isOpen = false
    },
  },
})

export const { openSidebar, closeSidebar } = headerSlice.actions

export default headerSlice.reducer
