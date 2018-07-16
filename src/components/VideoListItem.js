import React from 'react';


export const VideoListItem = (props) =>{
    console.log(props.video);

    return (
        <li onClick={props.selectVideo}>
            <img src={props.video.snippet.thumbnails.medium.url}/>
            <h4>{props.video.snippet.title}</h4>
        </li>
    );
};