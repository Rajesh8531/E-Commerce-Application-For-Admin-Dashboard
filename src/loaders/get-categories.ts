
import axios from "axios";

const getCategories =async ()=>{
    const {data} = await axios.get(import.meta.env.VITE_GET_CATEGORIES_URL)
    return data
}

export default getCategories 