import React from 'react'
import { FaSearch } from 'react-icons/fa';

function Header() {
    return (
        <div className='grid grid-flow-col shadow-lg h-[9vh] justify-between items-center px-5'>
            <div className='flex col-span-1 gap-5 items-center'>
                <img
                    className='h-8'
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="Humburger Menu" />
                <img
                    className='h-6'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" alt="Logo" />
            </div>
            <div className='col-span-10 flex justify-center'>
                <input type="text"
                    className='border rounded-l-4xl w-7/12 px-5 py-2 outline-none active:border focus:border-blue-400'
                    placeholder='Search' />
                <button className='border border-l-0 rounded-r-4xl px-7 bg-gray-100 py-2 cursor-pointer'>
                    <FaSearch size={18}  />
                </button>
            </div>
            <div className='col-span-1'>
                <img
                    className='h-8'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="User" />
            </div>
        </div>
    )
}

export default Header
