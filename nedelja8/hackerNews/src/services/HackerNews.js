import axios from 'axios';

export const baseUrl = `https://hacker-news.firebaseio.com/v0`;
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const storyUrl = `${baseUrl}/item`


export const getStoryIds = async () => {
    return await axios.get(newStoriesUrl).then(({data})=> data)
}

export const getStory = async (id) => {
    return await axios.get(`${storyUrl}/${id}.json`).then(({data})=> 
        data ? ({by: data.by, time: data.time, title: data.title, url: data.url}) : null
    )
}

export const showStories = async () => {
    return await axios.get(`${baseUrl}/showstories.json`).then(res => res.data)
}

export const askStories = async () => {
    return await axios.get(`${baseUrl}/askstories.json`).then(res => res.data)
}