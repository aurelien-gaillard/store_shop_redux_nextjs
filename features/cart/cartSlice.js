import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, color, amount, product } = action.payload
      const tempItem = state.cart.find((i) => i.id === id + color)
      if (tempItem) {
        state.cart.map((item, index) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount
            if (newAmount > item.max) {
              state.cart[index].amount = item.max
            } else {
              state.cart[index].amount += amount
            }
          }
        })
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        }
        state.cart.push(newItem)
      }
    },
    clearCart(state, action) {
      state.cart = []
    },
    removeItem(state, action) {
      const id = action.payload
      state.cart = state.cart.filter((item) => item.id !== id)
    },
  },
})

export const { addToCart, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
