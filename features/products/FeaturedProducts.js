import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Product from './Product'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'

const FeaturedProducts = () => {
  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)
  const featuredProducts = useSelector(
    (state) => state.products.featured_products
  )

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <h2>{error}</h2>
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featuredProducts.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link href='/products'>
        <a className='btn'>all products</a>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
