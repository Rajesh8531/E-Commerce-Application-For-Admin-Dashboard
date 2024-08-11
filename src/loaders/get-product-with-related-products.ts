
import axios from "axios";
import getProduct from "./get-product";

const getProductWithRelatedProduct =async ({params}:{params:any})=>{
    const {product}  = await getProduct({params})
    
    const {data:relatedProducts} = await axios.get(import.meta.env.VITE_BASE_URL + `/products?category=${product.categoryId}`)

    return {product,relatedProducts}
}

export default getProductWithRelatedProduct 