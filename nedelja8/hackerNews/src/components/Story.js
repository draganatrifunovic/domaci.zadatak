import React, { useState, useEffect } from 'react'
import { getStory} from '../services/HackerNews';
import { mapTimeString } from '../utils/mapTimeString';

export const Story = ({storyId}) => {
    const [story,setStory] = useState({});

    useEffect(()=> {
        getStory(storyId).then(data => data && setStory(data))
    },[])

    return(
    <>
    <div className="container">
        <a href={story.url} target="_blank">
            <h3>{story.title}</h3>
        </a>
        <p>{story.by}</p>
        <p>Objavljeno pre: {mapTimeString(story.time)}</p>
    </div>
    </>

    )
}
