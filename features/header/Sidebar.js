import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { links } from '../../utils/constants'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from './headerSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.header.isOpen)

  return (
    <Wrapper>
      <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''} `}>
        <div className='sidebar-header'>
          <img src='logo.svg' className='logo' alt='coding addict' />
          <button
            className='close-btn'
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </button>
        </div>

        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link href={url}>
                  <a onClick={() => dispatch(closeSidebar())}>{text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
