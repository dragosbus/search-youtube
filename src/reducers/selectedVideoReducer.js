import * as ActionTypes from '../actionTypes/actionTypes';

const selectedVideoReducer = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.SELECT_VIDEO:
            return action.index;
        default:
            return state;
    }
};

export default selectedVideoReducer;