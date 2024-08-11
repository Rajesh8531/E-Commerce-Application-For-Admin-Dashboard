import { useLoaderData } from 'react-router-dom'
import { BillBoard, Category, Color, Image, Product, Size } from '../../types'
import Billboard from '../billboard'
import Container from '../container'
import ProductList from '../product-list'

type loaderDataType = {
  billboard : BillBoard,
  products : (Product & {
    image : Image[],
    category : Category,
    size : Size,
    color : Color
  })[]
}

const StoreHomePage = () => {

  const {billboard,products} = useLoaderData() as loaderDataType

  return (
    <Container>
      <div className='space-y-10 px-8'>
        <Billboard billboard={billboard} />
        <ProductList title='Featured Products' products={products} />
      </div>
    </Container>
  )
}

export default StoreHomePage