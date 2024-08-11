import React from 'react'
import { BillBoard } from '../types'

interface BillboardProps {
    billboard : BillBoard
}

const Billboard:React.FC<BillboardProps> = ({billboard}) => {

  return (
    <div className='mx-auto mt-8 rounded-xl overflow-hidden'>
        <div className='rounded-xl relative aspect-square overflow-hidden md:aspect-[2.4/1]'
        style={{backgroundImage : `url(${billboard?.imageUrl})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}
        >
            <div className='w-full h-full flex flex-col items-center justify-center text-center'>
                <div className='font-bold text-3xl sm:text-5xl sm:max-w-xl max-w-xs lg:text-6xl'>
                    {billboard?.label}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billboard