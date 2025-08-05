import React, { useEffect, useState } from 'react'
import { YT_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
                <Link to={"/watch?v=" + video.id} key={video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer
