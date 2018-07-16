import React from 'react';
import {VideoListItem} from './VideoListItem';

export const VideoList = props =>{
    return (
        <ul className="video-list">
            {props.videos.map((video, index) => 
                 <VideoListItem key={video.etag} video={video} selectVideo={()=>props.selectVideo(index)}/>
            )}
        </ul>
    );
};