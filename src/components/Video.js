import React from 'react';


export const Video = ({video}) =>{
    if(!video) {
        return <div>Loading...</div>
    }

    let videoId = video.id.videoId;
    let url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="selected-video">
            <div className="video">
                <iframe src={url}></iframe>
            </div>
            <div className="details">
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};