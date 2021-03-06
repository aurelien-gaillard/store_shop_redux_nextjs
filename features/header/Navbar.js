import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { links } from '../../utils/constants'
import { useDispatch } from 'react-redux'
import { openSidebar } from './headerSlice'
import CartButtons from '../cart/CartButtons'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link href='/'>
            <a>
              <img src='logo.svg' alt='comfy sloth' />
            </a>
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={() => dispatch(openSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.url}>
                  <a>{link.text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`
export default Navbar
