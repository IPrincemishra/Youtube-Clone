import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

function WatchPage() {

    const [serachParams] = useSearchParams()
    const videoKey = serachParams.get("v")
    console.log(videoKey);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='py-4 px-5'>
            <iframe
                width="900"
                height="510"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3&fs=1&disablekb=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default WatchPage
