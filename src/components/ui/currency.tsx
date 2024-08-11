import React from 'react'
import { formatter } from '../../lib/utils'

interface CurrencyProps {
    data : string | number
}

const Currency:React.FC<CurrencyProps> = ({data}) => {
    const currency = formatter.format(Number(data))
  return (
    <div className='font-semibold text-lg'>
        {currency}
    </div>
  )
}

export default Currency