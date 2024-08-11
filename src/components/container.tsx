import React from 'react'

interface CotainerProps {
    children : React.ReactNode
}

const Container:React.FC<CotainerProps> = ({children}) => {
  return (
    <div className='w-full max-w-7xl mx-auto '>{children}</div>
  )
}

export default Container