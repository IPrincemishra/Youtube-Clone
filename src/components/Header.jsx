import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { HUMBURGER_ICON, PF_ICON, YT_LOGO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

function Header() {

    const disptach = useDispatch()

    const toggleMenuHandle = () => {
        disptach(toggleMenu())
    }

    return (
        <div className='grid grid-flow-col shadow-lg h-[9vh] justify-between items-center px-5 '>
            <div className='flex col-span-1 gap-5 items-center cursor-pointer'>
                <img
                    onClick={toggleMenuHandle}
                    className='h-8'
                    src={HUMBURGER_ICON} alt="Humburger Menu"
                />
                <img
                    className='h-6'
                    src={YT_LOGO} alt="Logo" />
            </div>
            <div className='col-span-10 flex justify-center'>
                <input type="text"
                    className='border rounded-l-4xl w-7/12 px-5 py-2 outline-none active:border focus:border-blue-400'
                    placeholder='Search' />
                <button className='border border-l-0 rounded-r-4xl px-7 bg-gray-100 py-2 cursor-pointer'>
                    <FaSearch size={18} />
                </button>
            </div>
            <div className='col-span-1'>
                <img
                    className='h-8'
                    src={PF_ICON} alt="User" />
            </div>
        </div>
    )
}

export default Header
