import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../features/header/Navbar'
import Sidebar from '../features/header/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'
import { initializeFilters } from '../features/filter/filterSlice'
import Footer from './Footer'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  useEffect(() => {
    if (products.length !== 0) {
      dispatch(initializeFilters(products))
    }
  }, [products])

  return (
    <div>
      <Head>
        <title>Bio Products shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
