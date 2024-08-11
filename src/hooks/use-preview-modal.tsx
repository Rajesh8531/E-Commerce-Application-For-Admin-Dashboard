import { create } from "zustand";
import { Color, Image, Product, Size } from "../types";

interface previewModalProps {
    isOpen : boolean;
    onOpen : (data:Product & {image : Image[],color:Color,size:Size})=>void;
    data : Product & {image:Image[],color:Color,size:Size} | undefined;
    onClose : ()=>void;
}

const usePreviewModal = create<previewModalProps>((set)=>({
    isOpen : false,
    data : undefined,
    onOpen : (product)=>set({isOpen:true,data:product}),
    onClose : ()=>set({isOpen:false,data:undefined})
}))

export default usePreviewModal