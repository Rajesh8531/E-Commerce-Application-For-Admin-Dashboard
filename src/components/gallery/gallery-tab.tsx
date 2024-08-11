import { Tab } from '@headlessui/react'
import React from 'react'
import { Image } from '../../types'
import { cn } from '../../lib/utils'

interface GalleryTabProps {
  image :Image
}

const GalleryTab:React.FC<GalleryTabProps> = ({image}) => {
  return (
    <Tab>
      {({selected})=>(
        <div className='aspect-square border relative '>
          <img
          alt=''
          src={image.url}
          className='aspect-square'
          />
          <div className={cn('absolute inset-0 ring-2 ring-offset-8 ',selected ? 'ring-black' : 'ring-neutral-200')} />
        </div>)}
    </Tab>
  )
}

export default GalleryTab