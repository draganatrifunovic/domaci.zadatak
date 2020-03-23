import React, { useState, useEffect } from 'react';
import { getStoryIds, showStories, askStories } from '../services/HackerNews';
import { Story } from '../components/Story';

export const StoriesContainer = () => {

  const [storyIds,setStoryId] = useState([])
  useEffect(()=> {
    getStoryIds().then(data => setStoryId(data))
  },[])

  const handleChange=(e)=> {
    let selected = e.target.value;
    if(selected === "show") {
        showStories().then(res => setStoryId(res))
    } else if(selected === "ask") {
        askStories().then(res=> setStoryId(res))
    }
}

 
  return (
    <>
    <select onChange={(e) => handleChange(e)}>
        <option value="show">Show stories</option>
        <option value="ask">Ask stories</option>
    </select>
        {storyIds.map(storyId => <Story storyId={storyId} key={storyId} />)}
    </>
  )
}


