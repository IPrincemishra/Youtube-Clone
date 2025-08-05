import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "Cooking", "News", "Sports"]

function ButtonList() {
    return (
        <div className='flex  gap-3.5 pb-4'>
            {list.map((btn, idx) => (
                <button
                    key={idx}
                    className='px-4 py-1 rounded-full bg-gray-100 font-medium hover:bg-gray-200 transition'>
                    {btn}
                </button>
            )
            )}
        </div>
    )
}

export default ButtonList
