
import axios from "axios";

const getProduct =async ({params}:{params:any})=>{
    const {data:product} = await axios.get(import.meta.env.VITE_BASE_URL + `/products/${params.productId}`) 
    return {product}
}

export default getProduct 