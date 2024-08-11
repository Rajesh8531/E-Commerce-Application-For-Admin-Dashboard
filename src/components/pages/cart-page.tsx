
import Container from '../container'
import useCart from '../../hooks/use-cart-store'
import CartBox from '../cart-box'
import Summary from '../summary'

const CartPage = () => {
  
  const cart = useCart()

  return (
    <Container>
        <div className='px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold py-16'>Shopping Cart</h1>
        </div>
        <div className='lg:grid lg:grid-cols-12 gap-x-12 lg:items-start'>
            <div className='lg:col-span-7'>
              {cart.items.length === 0 && <p className='text-neutral-500 text-center py-6'>No items added to cart</p>}
              <ul>
                {cart.items.map((item)=>(
                  <CartBox key={item.id} product={item} />
                ))}
              </ul>
            </div>
            <Summary />
        </div>
    </Container>
  )
}

export default CartPage