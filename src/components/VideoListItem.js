import React from 'react';


export const VideoListItem = ({video}) =>{
    console.log(video);
    return (
        <li>{video.snippet.title}</li>
    );
};