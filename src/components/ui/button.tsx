import React from "react"
import { cn } from "../../lib/utils"

type variant = 'default' | 'outline' | 'destructive' | 'secondary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : variant,
    disabled? : boolean,
    onClick? : ()=>void,
    className? : string,
    children : React.ReactNode
}

const variantMap : Record<variant,string> = {
    default : 'text-white bg-black',
    destructive : 'bg-red-500 text-white ',
    outline : 'border border-neutral-300 bg-white text-black' ,
    secondary : 'hover:bg-neutral-100 bg-white border text-black border-neutral-200'
}

const Button = React.forwardRef<HTMLButtonElement,ButtonProps>(({
    variant = 'default',
    disabled,
    onClick,
    className,
    children,
    ...props
},ref)=>{
    const variantStyle = variantMap[variant]
    return (
        <button {...props} 
        disabled={disabled} 
        onClick={onClick} 
        ref={ref}
        className={cn('px-4 py-2 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition',variantStyle,className)}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button"

export default Button

