import {combineReducers} from 'redux';

import videosReducer from './videosReducer';
import queryReducer from './queryReducer';
import selectedVideoReducer from './selectedVideoReducer';

const rootReducer = combineReducers({
    videos: videosReducer,
    query: queryReducer,
    selectedVideo: selectedVideoReducer
});

export default rootReducer;