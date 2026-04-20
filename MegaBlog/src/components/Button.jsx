import React from 'react'

function Button({
    chidlren,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    ClassName = "",
    ...props
}) {
  return (
    <button className={`${bgColor} ${textColor} ${ClassName}`} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
