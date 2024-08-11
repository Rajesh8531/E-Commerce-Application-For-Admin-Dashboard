import React, { useState } from 'react'
import { Color, Size } from '../types'
import Button from './ui/button'
import { Plus, X } from 'lucide-react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { cn } from '../lib/utils'
import FilterBox from './filter-box'
import IconButton from './ui/icon-button'

interface MobileFilterProps {
    colors : Color[],
    sizes : Size[]
}

const MobileFilter:React.FC<MobileFilterProps> = ({colors,sizes}) => {
    const [open,setOpen] = useState(false)
    const onOpen = ()=>setOpen(true)
    const onClose = ()=>setOpen(false)
  return (
    <>
        <div className='lg:hidden'>
            <Button onClick={onOpen} className='flex items-center gap-x-2'>
                <p>Filter</p>
                <Plus />
            </Button>
            <Transition appear show={open}>
                <Dialog className={'relative z-10'} onClose={onClose} as='div'>
                    <div className='fixed inset-0 bg-black bg-opacity-25 z-40 transition' />
                    <div className={cn('z-40 fixed inset-0 flex')}>
                        <TransitionChild
                        enter='ease-out duration-200'
                        enterFrom='translate-x-full opacity-0'
                        enterTo='translate-x-0 opacity-100'
                        leave='ease-in duration-100'
                        leaveFrom='translate-x-0 opacity-100'
                        leaveTo='transalte-x-full opacity-0'
                        >
                            <DialogPanel className='relative ml-auto flex h-full w-full overflow-y-auto max-w-xs flex-col bg-white py-4 pb-6 shadow-xl '>
                            <div className='p-4 space-y-8'>
                                <div className='flex items-center justify-end'>
                                    <IconButton icon={<X />} onClick={onClose} />
                                </div>
                                <FilterBox items={sizes} title='Sizes' valueKey='size' />
                                <FilterBox items={colors} title='Colors' valueKey='color' />
                            </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </div>
    </>
  )
}

export default MobileFilter