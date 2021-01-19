import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import CartTotal from './CartTotal'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import { clearCart } from './cartSlice'

const CartContent = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link href='/products'>
          <a className='link-btn'>continue shopping </a>
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={() => dispatch(clearCart())}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
