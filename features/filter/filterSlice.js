import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 100,
    price: 0,
    shipping: false,
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Calculate the max price and define the filtered_products
    initializeFilters(state, action) {
      let maxPrice = action.payload.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)
      state.filters.max_price = maxPrice
      state.filters.price = maxPrice
      state.filtered_products = action.payload
    },

    // Update Filters
    updateFilters: {
      reducer(state, action) {
        const { name, value } = action.payload
        state.filters[name] = value
      },
      prepare(e) {
        let name = e.target.name
        let value = e.target.value
        if (name === 'category') {
          value = e.target.textContent
        }
        if (name === 'color') {
          value = e.target.dataset.color
        }
        if (name === 'price') {
          value = Number(value)
        }
        if (name === 'shipping') {
          value = e.target.checked
        }
        return {
          payload: {
            name,
            value,
          },
        }
      },
    },

    // Update List of Filtered Products
    updateFilteredProducts(state, action) {
      const { text, company, category, color, price, shipping } = state.filters
      let tempList = action.payload
      if (text) {
        tempList = tempList.filter((item) =>
          item.name.toLowerCase().startsWith(text)
        )
      }
      if (company !== 'all') {
        tempList = tempList.filter((item) => item.company === company)
      }
      if (category !== 'all') {
        tempList = tempList.filter((item) => item.category === category)
      }
      if (color !== 'all') {
        tempList = tempList.filter((item) => {
          return item.colors.find((c) => c === color)
        })
      }
      tempList = tempList.filter((item) => item.price <= price)
      if (shipping) {
        tempList = tempList.filter((item) => item.shipping === true)
      }

      state.filtered_products = tempList
    },

    // Clear all filters
    clearFilters(state, action) {
      state.filters.text = ''
      state.filters.company = 'all'
      state.filters.category = 'all'
      state.filters.color = 'all'
      state.filters.price = state.filters.max_price
      state.filters.shipping = false
    },
  },
})

export const {
  updateFilters,
  clearFilters,
  initializeFilters,
  updateFilteredProducts,
} = filterSlice.actions

export default filterSlice.reducer
