import React from 'react'

function Button({name}) {
    return (
        <div>
            <button className='bg-gray-200 px-4 rounded-xl py-[2px] flex items-center justify-center'>{name}</button>
        </div>
    )
}

export default Button
