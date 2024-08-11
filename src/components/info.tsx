import React from 'react'
import { FullProductType } from '../types'
import Currency from './ui/currency'
import Button from './ui/button'
import { ShoppingCart } from 'lucide-react'
import useCart from '../hooks/use-cart-store'

interface InfoProps {
    product : FullProductType
}

const Info:React.FC<InfoProps> = ({product}) => {

    const cart = useCart()

    const onAdd = ()=>{
        cart.addItem(product)
    }

  return (
    <div className='space-y-6 mt-5'>
        <div>
            <h2 className='text-2xl font-bold'>{product?.name}</h2>
            <Currency data={product?.price} />
        </div>
        <hr />
        <div className='flex gap-x-3'>
            <p className='font-semibold '>Size:</p>
            <p>{product?.size?.name}</p>
        </div>
        <div className='flex gap-x-3 items-center'>
            <p className='font-semibold '>Color:</p>
            <div className='p-3 rounded-full flex-shrink-0' style={{backgroundColor : product?.color?.value}}/>
        </div>
        <Button onClick={onAdd} className='rounded-full flex gap-x-2'>
            <p className='font-semibold text-sm'>Add To Cart</p>
            <ShoppingCart className='text-white' size={20} />
        </Button>
    </div>
  )
}

export default Info