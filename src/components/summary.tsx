
import Currency from './ui/currency'
import Button from './ui/button'
import axios from 'axios'
import useCart from '../hooks/use-cart-store'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'


const Summary:React.FC = () => {

    const cart = useCart()

    const items = cart.items
    const totalPrice = cart.items.reduce((total,item)=>total+item.price,0)
    const removeAll = cart.removeAll

    const onCheckout = async () => {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/checkout`,{
            productIds : items.map((item)=>item.id)
        })

        console.log(response.data)
        window.location = response.data.url
    }

    const searchParams = useSearchParams()[0]

    useEffect(()=>{
        if(searchParams.get('success')){
            toast.success("Payment completed")
            removeAll()
        }

        if(searchParams.get('canceled')){
            toast.error("Something went wrong")
        }
    },[searchParams,removeAll])

  return (
    <div className='px-4 py-6 mt-16 lg:mt-0 lg:col-span-5 lg:p-8 bg-gray-50'>
        <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
        <div className='space-y-4 mt-6'>
            <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <div className='text-base font-medium text-gray-900'>
                    Order total
                </div>
                <Currency data={totalPrice} />
            </div>
        </div>
        <Button onClick={onCheckout} className='w-full mt-6'>Checkout</Button>
    </div>
  )
}

export default Summary