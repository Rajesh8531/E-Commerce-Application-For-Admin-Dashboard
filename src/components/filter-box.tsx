import React from 'react'
import { Color, Size } from '../types'
import Button from './ui/button'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string'

interface FilterBoxProps {
    items : Size[] | Color[],
    title:string,
    valueKey : string
}

const FilterBox:React.FC<FilterBoxProps> = ({items,title,valueKey}) => {

    const searchParams = useSearchParams()[0]
    const colorId = searchParams.get('color')
    const sizeId = searchParams.get('size')
    const navigate = useNavigate()
    const {search,pathname} = useLocation()
    const current = qs.parse(search.toString())

    const onClick = (id:string)=>{

        const query = {
            ...current,
            [valueKey] : id
        }

        if(current[valueKey] == id){
            query[valueKey] = null
        }

        const url = qs.stringifyUrl({
            url : pathname,
            query : query
        },{skipNull : true})

        navigate(url)
    }
    
  return (
    <div className='space-y-3 w-[170px] px-2 mb-2'>
        <p className='text-sm font-semibold'>{title}</p>
        <hr />
        <div className='flex flex-wrap gap-2'>
            {items.map((item)=>(
                <Button 
                onClick={()=>onClick(item.id)}
                variant={(item.id === colorId || item.id ==  sizeId) ? 'default' : 'secondary'}
                key={item.id}>
                    {item.name}
                </Button>
            ))}
        </div>
    </div>
  )
}

export default FilterBox