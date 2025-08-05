import React, { useEffect, useState } from 'react'
import { YT_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

function VideoContainer() {

    const [videos, setVideos] = useState([])

    const getVideo = async () => {
        const data = await fetch(YT_VIDEOS_API)
        const json = await data.json()

        setVideos(json.items)
    }

    useEffect(() => {
        getVideo();
    }, [])


    return (
        <div className='flex gap-4 flex-wrap justify-evenly'>
            {videos.map((video) => (
                <VideoCard key={videos.id} info={video} />
            ))}
        </div>
    )
}

export default VideoContainer
