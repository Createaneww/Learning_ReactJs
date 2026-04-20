import React from 'react'
import { useId } from 'react'

const input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
 const id = useId();
 return(
    <div>
        {
            label && <label htmlFor={id} className='block mb-1 font-medium'>
                {label}
            </label>
        }
        <input
            type={type}
            className={`border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
            ${className}`}
            ref={ref}
            {...props}
            id={id}
        />

    </div>
 )
})

export default Input
