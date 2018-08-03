import * as ActionTypes from '../actionTypes/actionTypes';


const videosReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.FETCH_DATA:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default videosReducer;