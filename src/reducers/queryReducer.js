import * as ActionTypes from '../actionTypes/actionTypes';


const queryReducer = (state='', action) => {
    switch(action.type) {
        case ActionTypes.SET_QUERY:
            return action.query;
        default:
            return state;
    }
}

export default queryReducer;