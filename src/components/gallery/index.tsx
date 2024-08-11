import React from 'react'
import { Image } from '../../types'
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import GalleryTab from './gallery-tab'

interface GalleryProps {
  images : Image[]
}

const Gallery:React.FC<GalleryProps> = ({images}) => {

  return (
    <>
    <TabGroup className={'flex w-full flex-col-reverse'}>
      <div className='mx-auto mt-6 w-full hidden sm:block max-w-2xl lg:max-w-max'>
        <TabList className={'grid grid-cols-4 gap-6'}>
            {
              images?.map((image)=>(<GalleryTab key={image.id} image={image}/>
              ))
            }
          </TabList>
        </div>
      <TabPanels>
        {
          images?.map((image)=>(
            <TabPanel key={image.id}>
              <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
                <img
                src={image.url}
                alt='image'
                className='object-cover object-center'
                />
              </div>
            </TabPanel>
          ))
        }
      </TabPanels>
    </TabGroup>
    </>
  )
}

export default Gallery