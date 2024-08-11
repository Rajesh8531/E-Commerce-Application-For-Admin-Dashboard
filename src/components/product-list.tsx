import { Image, Product,Category, Color, Size } from "../types"
import NoProductsFound from "./no-products-found";
import Productcard from "./product-card"

interface ProductListProps {
    products : (Product & {
        image : Image[],
        category : Category,
        color : Color,
        size : Size
      })[];
    title? : string;
}

const ProductList:React.FC<ProductListProps> = ({products,title}) => {
  return (
    <div className="space-y-4 flex-1 pb-8">
        { title && <h1 className="text-3xl font-semibold">{title}</h1>}
        {products.length !== 0 ? 
          (
            <div className="grid w-full pb-4 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {products.map((product)=>(<Productcard key={product.id} product={product} />))}
            </div>
          ) 
        : (
            <NoProductsFound />
          )}
    </div>
  )
}

export default ProductList