import React from 'react'
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface MainNavProps {
    routes : {
        name : string;
        url : string;
        active:boolean
    }[]
}

const MainNav:React.FC<MainNavProps> = ({routes}) => {

  return (
    <div className='flex flex-1 items-center gap-x-6'>
        {
            routes.map(route=>(
                <NavLink
                key={route.url} 
                to={route.url}
                className={cn('font-semibold ',route.active ? 'text-black' : 'text-neutral-400')}
                >
                    {route.name}
                </NavLink>
            ))
        }
    </div>
  )
}

export default MainNav