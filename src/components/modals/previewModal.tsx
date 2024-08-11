import React from 'react'
import Modal from './modal';
import usePreviewModal from '../../hooks/use-preview-modal';
import Gallery from '../gallery';
import Info from '../info';


const PreviewModal:React.FC= () => {

  const onClose = usePreviewModal(state=>state.onClose)
  const isOpen = usePreviewModal(state=>state.isOpen)
  const data = usePreviewModal(state=>state.data)

  if(!data){
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-full grid grid-cols-1 sm:grid-cols-12 items-start gap-x-6 gap-y-8 lg:gap-x-8'>
        <div className='sm:col-span-4 lg:col-span-5'>
          <Gallery images={data.image} />
        </div>
        <div className='sm:col-span-8 lg:col-span-7'>
          <Info product={data} />
        </div>
      </div>
    </Modal>
  )
}

export default PreviewModal