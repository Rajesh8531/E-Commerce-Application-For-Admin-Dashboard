import { create } from "zustand";
import { FullProductType } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

interface previewModalProps {
    items : FullProductType[];
    addItem : (data:FullProductType)=>void;
    removeItem : (id:string)=>void;
    removeAll : ()=>void;
}

const useCart = create(persist<previewModalProps>((set,get)=>({
    items : [],
    addItem : (product :FullProductType)=>{

        const currentItems = get().items

        const isExisting = currentItems.find(item=>product.id == item.id)

        if(isExisting){
            return toast("Product Already Existing")
        }

        toast.success("Added to cart")

        set({items : [...currentItems,product]})
    },
    removeItem : (id:string)=>{

        const currentItems = get().items

        const filteredItems = currentItems.filter(item=>item.id !== id)

        set({items : filteredItems})
    },
    removeAll : ()=>{
        set({items:[]})
    }
}),{
    name : 'cart',
    storage : createJSONStorage(()=>localStorage)
}))
export default useCart