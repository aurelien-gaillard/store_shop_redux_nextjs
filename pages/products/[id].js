import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { fetchSingleProduct } from '../../features/single_product/singleProductSlice'
import Loading from '../../components/Loading'
import PageHero from '../../components/PageHero'
import { formatPrice } from '../../utils/helpers'
import ProductImages from '../../features/single_product/ProductImages'
import Stars from '../../features/single_product/Stars'
import AddToCart from '../../features/single_product/AddToCart'

const url = `https://course-api.com/react-store-single-product?id=`

const SingleProductPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query

  const error = useSelector((state) => state.single_product.error)
  const product = useSelector((state) => state.single_product.product)
  const status = useSelector((state) => state.single_product.status)

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id))
    }
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        router.push('/')
      }, 3000)
    }
  }, [error])

  if (status === 'loading') {
    return <Loading />
  }
  if (error) {
    return <h2>{error}</h2>
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link href='/products'>
          <a className='btn'>back to products</a>
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
