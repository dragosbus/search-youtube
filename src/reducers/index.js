import {combineReducers} from 'redux';

import {videosReducer} from './videosReducer';
import {queryReducer} from './queryReducer';

const rootReducer = combineReducers({
    videos: videosReducer,
    query: queryReducer
});

export default rootReducer;