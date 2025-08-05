import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ info }) {
    const { snippet, statistics } = info ?? {};
    const { channelTitle, title, thumbnails } = snippet ?? {};

    return (
        
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition w-[330px] cursor-pointer m-2">
            {/* Video thumbnail */}
            <img
                src={thumbnails?.medium?.url}
                alt={title}
                className="rounded-t-lg w-full h-fit object-cover"
            />

            {/* Video details */}
            <div className="flex gap-3 p-3">
                {/* (Optional: Channel logo can go here if available)
        <img src={snippet?.thumbnails?.default?.url} alt="" className="w-10 h-10 rounded-full" />
        */}
                <div className="flex flex-col">
                    <span className="font-semibold text-[15px] mb-1 line-clamp-2">{title}</span>
                    <span className="text-sm text-gray-600 mb-0.5">{channelTitle}</span>
                    <span className="text-xs text-gray-500">
                        {statistics?.viewCount
                            ? Number(statistics.viewCount).toLocaleString() + ' views'
                            : ''}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
