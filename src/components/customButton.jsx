import React from 'react'

const CustomButton = ({styles, title, handleClick}) => {
  return (
    <button className={`py-2 px-6 bg-blue-gradient outline-none ${styles}` } onClick={handleClick}>
        <span className=' font-bold text-lg'>
            {title}
        </span>
    </button>
  )
}

export default CustomButton