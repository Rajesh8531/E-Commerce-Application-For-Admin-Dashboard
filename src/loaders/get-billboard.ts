import axios from "axios";

const getBillboard =async ({params}:{params:any})=>{
    if(!params){
        const {data} = await axios.get(import.meta.env.VITE_BASE_URL + `/billboards/${params.billboardId}`)
        return data
    } else {
        const {data} = await axios.get(import.meta.env.VITE_BASE_URL + `/billboards/66897525e2ae8ebc8f97924e`)
        return data
    }
    
}

export default getBillboard 