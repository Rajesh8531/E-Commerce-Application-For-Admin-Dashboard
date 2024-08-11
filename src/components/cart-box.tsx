import React from 'react'
import { FullProductType } from '../types'
import IconButton from './ui/icon-button'
import { X } from 'lucide-react'
import Currency from './ui/currency'
import useCart from '../hooks/use-cart-store'
import toast from 'react-hot-toast'

interface CartBoxProps {
    product : FullProductType
}

const CartBox:React.FC<CartBoxProps> = ({product}) => {

    const cart = useCart()

    const removeProduct = (id:string)=>{
        cart.removeItem(id)
        toast.success("Item Removed From the Cart")
    }
    
  return (
    <li className='flex py-6 border-b'>
        <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
            <img src={product?.image[0]?.url} alt="object-cover w-24 h-24 sm:h-48 sm:w-48 object-center" />
        </div>
        <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
            <div className='absolute z-10 top-0 right-0'>
                <IconButton onClick={()=>removeProduct(product.id)} icon={<X size={15} />} />
            </div>
            <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                <div className='flex justify-between'>
                    <p className='text-lg font-semibold text-black'>{product.name}</p>
                </div>
                <div className='mt-1 flex text-sm gap-x-2'>
                    <p className='text-gray-500'>{product.color.name}</p>
                    <p className='text-gray-500'>{product.size.name}</p>
                </div>
                <Currency data={product.price} />
            </div>
        </div>
    </li>
  )
}

export default CartBox