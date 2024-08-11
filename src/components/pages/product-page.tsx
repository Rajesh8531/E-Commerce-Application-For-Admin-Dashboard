
import { useLoaderData } from 'react-router-dom'
import Container from '../container'
import { Category, Color, Image, Product, Size } from '../../types'
import Gallery from '../gallery'
import Info from '../info'
import ProductList from '../product-list'

interface LoaderDataType {
  product : (Product & {image : Image[],color:Color,size:Size})
  relatedProducts : (Product & {category:Category,image : Image[],color:Color,size:Size})[]
}

const ProductPage = () => {

  const {product,relatedProducts} = useLoaderData() as LoaderDataType
  const filteredRelatedProducts = relatedProducts.filter((relatedProduct)=>relatedProduct.id !== product.id)
  
  return (
    <Container>
      <div className='px-4 sm:px-8'>
        <div className='lg:grid lg:grid-cols-2 py-10 gap-8'>
          <Gallery images={product.image} />
          <Info product={product} />
        </div>
        <ProductList title='RelatedItems' products={filteredRelatedProducts} />
      </div>
    </Container>
  )
}

export default ProductPage