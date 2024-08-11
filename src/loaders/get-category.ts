
import axios from "axios";

const getCategory =async ({params}:{params:any})=>{
    const {data} = await axios.get(import.meta.env.VITE_GET_CATEGORIES_URL + `/${params.categoryId}`)
    return data
}

export default getCategory 