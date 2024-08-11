import React from 'react'
import { Product,Image, Category, Color, Size } from '../types'
import IconButton from './ui/icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './ui/currency'
import { useNavigate } from 'react-router-dom'
import usePreviewModal from '../hooks/use-preview-modal'
import useCart from '../hooks/use-cart-store'
interface ProductCardProps {
    product : (Product & {
        image : Image[],
        category : Category,
        color : Color,
        size : Size
      })
}

const Productcard:React.FC<ProductCardProps> = ({product}) => {

  const navigate = useNavigate()
  const previewModal = usePreviewModal()

  const onOpen = (e:any)=>{
    e.stopPropagation()
    previewModal.onOpen(product)
  }

  const cart = useCart()

  const onAddCart = (e:any)=>{
    e.stopPropagation()
    cart.addItem(product)
  }

  return (
    <div
    onClick={()=>navigate(`/product/${product.id}`)}
      className='relative border bg-white space-y-3 w-full group rounded-xl overflow-hidden p-3'>
        <div 
        
        className='relative aspect-square overflow-hidden flex flex-col transition cursor-pointer gap-3 bg-neutral-300 space-y-6'>
            <img className='aspect-square object-cover ' src={product?.image[0]?.url}  /> 
            <div className='transition px-6 justify-center w-full z-10 gap-3 absolute group-hover:opacity-100 opacity-0 bottom-5'>
                <div className='flex gap-x-6 justify-center'>
                  <IconButton onClick={onOpen}  icon={<Expand size={20} className='text-neutral-500 z-10' />}  />
                  <IconButton onClick={onAddCart} icon={<ShoppingCart size={20} className='text-neutral-500 z-10' />} />
                </div>
            </div>
        </div>
            
        <div className='flex flex-col'>
                <p className='font-semibold'>{product.name}</p>
                <p className='text-sm text-neutral-500'>{product.category.name}</p>
        </div>
        <div>
            <Currency data={product.price} />
        </div>
    </div>
  )
}

export default Productcard