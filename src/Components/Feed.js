import React from 'react'
import './Feed.css'
import StoryReel from '../Components/StoryReel'
import MessageSender from '../Components/MessegeSender'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            
        </div>
    )
}

export default Feed
