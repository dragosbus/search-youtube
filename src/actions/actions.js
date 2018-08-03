import * as ActionTypes from '../actionTypes/actionTypes';

export const fetchData = data => {
    return {
        type: ActionTypes.FETCH_DATA,
        data
    }
};

export const setQuery = query => {
    return {
        type: ActionTypes.SET_QUERY,
        query
    }
}


