import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

function WatchPage() {

    const [serachParams] = useSearchParams()
    const videoKey = serachParams.get("v")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='flex flex-col py-4 px-5 gap-5 w-full'>
            <div className='flex w-full gap-5'>
                <div className='w-8/12'>
                    <iframe
                        width="100%"
                        height="510"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3&fs=1&disablekb=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <CommentsContainer />
                </div>
                <div className='w-5/12'>
                    <LiveChat />
                </div>
            </div>
        </div>
    )
}

export default WatchPage
