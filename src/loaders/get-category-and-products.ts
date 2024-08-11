
import axios from "axios";
import getCategory from "./get-category";

const getCategoryAndProducts =async ({params,request}:{params:any,request:Request})=>{

    const category = await getCategory({params})
    const searchParams = new URL(request.url).searchParams
    const color = searchParams.get('color')
    const size = searchParams.get('size')

    const {data:sizes} = await axios(import.meta.env.VITE_BASE_URL + '/sizes')
    const {data:colors} = await axios(import.meta.env.VITE_BASE_URL + '/colors')

    if(color && size){
       const {data:products} = await axios(import.meta.env.VITE_BASE_URL + `/products?color=${color}&size=${size}&category=${params.categoryId}`)
        return {category,products,sizes,colors}
    } else if (color) {
        const {data:products} = await axios(import.meta.env.VITE_BASE_URL + `/products?color=${color}&category=${params.categoryId}`)
        return {category,products,sizes,colors}
    } else if (size) {
        const {data:products} = await axios(import.meta.env.VITE_BASE_URL + `/products?size=${size}&category=${params.categoryId}`)
        return {category,products,sizes,colors}
    } else {
        const {data:products} = await axios(import.meta.env.VITE_BASE_URL + `/products?category=${params.categoryId}`)
        return {category,products,sizes,colors}
    }
}

export default getCategoryAndProducts 