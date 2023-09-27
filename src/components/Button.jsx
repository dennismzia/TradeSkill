import React from 'react'

const Button = ({label}) => {
  return (
    <button className="px-12 py-4 bg-purple-600 text-white max-w-3xl rounded-md hover:bg-green-500">
        {label}
    </button>
  )
}

export default Button