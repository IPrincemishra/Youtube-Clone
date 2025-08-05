import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

function MainContainer() {
    return (
        <div className='col-span-11 py-4 px-5'>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer
