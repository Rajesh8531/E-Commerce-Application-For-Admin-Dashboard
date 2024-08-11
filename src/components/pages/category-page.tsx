
import { useLoaderData, useNavigate } from 'react-router-dom'
import Container from '../container'
import { BillBoard, Category, Product,Image, Color, Size } from '../../types'
import Billboard from '../billboard'
import { useEffect } from 'react'
import ProductList from '../product-list'
import FilterBox from '../filter-box'
import MobileFilter from '../mobile-filter'

interface loaderDataType {
  category : (
            Category & {
            billboard : BillBoard
          }),
  products : (Product & {
    image : Image[],
    category : Category,
    color : Color,
    size : Size
  })[],
  colors : Color[],
  sizes : Size[]
}

const CategoryPage = () => {

    const navigate = useNavigate()

    const {category,products,colors,sizes} = useLoaderData() as loaderDataType

    useEffect(()=>{
      if(!category){
        navigate('/')
      }
    },[])
                                                   
  return (
    <Container>
      <div className='space-y-8 px-4 sm:px-6 lg:px-8'>
        <Billboard billboard={category?.billboard} />
        <hr />
        <MobileFilter sizes={sizes} colors={colors} />
        <div className='flex w-full space-x-3'>
          <div className='w-fit hidden lg:block'>
            <FilterBox valueKey='color' items={colors} title='Colors' />
            <FilterBox valueKey='size' items={sizes} title='Sizes' />
          </div>
          <ProductList products={products} />
        </div>
      </div>
    </Container>
  )
}

export default CategoryPage