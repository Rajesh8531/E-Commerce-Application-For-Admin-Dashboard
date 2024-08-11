
import axios from "axios";
import getBillboard from "./get-billboard";

const getFeaturedProductsWithBillboard =async ()=>{
    const billboard =await getBillboard({params : {}})
    const {data:products} = await axios.get(import.meta.env.VITE_BASE_URL + '/products?featured=true')

    return {billboard,products}
}

export default getFeaturedProductsWithBillboard 