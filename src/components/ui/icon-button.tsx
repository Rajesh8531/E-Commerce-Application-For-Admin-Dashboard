import React from 'react'

interface IconButtonProps {
    onClick : React.MouseEventHandler<HTMLButtonElement> | undefined,
    icon : React.ReactElement
}

const IconButton:React.FC<IconButtonProps> = ({onClick,icon}) => {
  return (
    <button className='bg-white drop-shadow-lg rounded-full hover:scale-110 transition p-2' onClick={onClick}>
        {icon}
    </button>
  )
}

export default IconButton