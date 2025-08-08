import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { HUMBURGER_ICON, PF_ICON, YT_LOGO, YT_SEARCH_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResult } from '../utils/searchSlice';

function Header() {

    const [serachQuery, setSerachQuery] = useState([])
    const [suggestion, setSuggestion] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [hoveredValue, setHoveredValue] = useState(null)

    const disptach = useDispatch()
    const serachCache = useSelector((store) => store.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (serachCache[serachQuery]) {
                setSuggestion(serachCache[serachQuery])
            } else {
                searchSuggestion()
            }
        }, 200);

        return () => {
            clearTimeout(timer)
        }

    }, [serachQuery])

    const searchSuggestion = async () => {
        const data = await fetch(YT_SEARCH_API + serachQuery);
        const json = await data.json()
        setSuggestion(json[1])

        disptach(cacheResult({
            [serachQuery]: json[1]
        }))
    }


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
                    className="h-6"
                    src={YT_LOGO}
                    alt="YouTube Logo"
                />
            </div>
            <div className='col-span-10 flex flex-col relative w-full items-center '>
                <div className='w-full flex justify-center'>
                    <input
                        type="text"
                        className='border rounded-l-4xl w-7/12 px-5 py-2 outline-none active:border focus:border-blue-400'
                        placeholder='Search'
                        value={hoveredValue !== null ? hoveredValue : serachQuery}
                        onChange={(e) => setSerachQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => {
                            setTimeout(() => setShowSuggestions(false), 50)
                        }}
                    />
                    <button className='border border-l-0 rounded-r-4xl px-7 bg-gray-100 py-3 cursor-pointer'>
                        <FaSearch size={18} />
                    </button>
                </div>
                {
                    showSuggestions && suggestion.length > 0 && (
                        <div className='absolute left-[17.5%] top-[7vh] bg-white/90 w-7/12 shadow px-2 py-2 rounded-2xl'>
                            <ul className='flex flex-col gap-3 text-[1.1rem]'>
                                {
                                    suggestion.map((s) => (
                                        <li
                                            key={s}
                                            className='px-3 py-2 hover:bg-gray-100 rounded border-b-2 border-black/10'
                                            onMouseDown={() => {
                                                setSerachQuery(s)
                                                setHoveredValue(null)
                                                setShowSuggestions(false)
                                            }}
                                            onMouseEnter={() => setHoveredValue(s)}
                                            onMouseLeave={() => setHoveredValue(null)}
                                        >🔍 {s}</li>
                                    ))
                                }
                            </ul>
                        </div>)
                }
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
