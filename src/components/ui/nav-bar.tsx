
import { Link, Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { Category } from '../../types'
import MainNav from './main-nav'
import Button from './button'
import { ShoppingBag } from 'lucide-react'
import Footer from '../footer'
import ModalProvider from '../providers/model-provider'
import useCart from '../../hooks/use-cart-store'

const NavBar = () => {

  const categories = useLoaderData() as Category[]
  const {pathname} = useLocation()

  const navigate = useNavigate()
  const onClick = ()=>{
    navigate('/cart')
  }

  const formattedCategories = categories.map((category)=>({
    name : category.name,
    url : `/category/${category.id}`,
    active : pathname?.includes(`${category.id}`)!
  }))

  const length = useCart().items.length

  return (
    <>
      <ModalProvider />
      <div className='h-16 border-b gap-x-6 flex justify-between items-center px-4 sm:px-6 lg:px-8'>
          <Link to={'/'} className='font-semibold text-xl' >STORE</Link>
          <MainNav routes={formattedCategories} />
          <Button onClick={onClick} className='rounded-full flex items-center' variant='default'>
            <ShoppingBag className='w-5 h-5 mr-2' />
            <p>{length}</p>
          </Button>
      </div>
        <Outlet />
        <Footer />
    </>
  )
}

export default NavBar