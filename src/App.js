import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Search} from './components/Search';
import {VideoList} from './components/VideosList';
import {Video} from './components/Video';
import * as ActionCreators from './actions/actions';

const API_KEY = 'AIzaSyAEGffpXZAuR9_FpYlWSo5f28JW6ZgJgSE';

class App extends Component {

  render() {
    const {dispatch, videos, query, selectedVideo} = this.props;

    const selectVideo = bindActionCreators(ActionCreators.selectVideo, dispatch);
    const setQuery = bindActionCreators(ActionCreators.setQuery, dispatch);
    
    return (
      <div className="app">
        <Search submitSearch={setQuery} />
        <Video video = {videos[selectedVideo]}/>
        <VideoList videos={videos} selectVideo={selectVideo}/>
      </div>
    );
  }
}

export const fetchDataAsync = store => next => action => {
  if(!action.payload) {
    next(action);
  }

  return YTSearch({ key: API_KEY, term: 'space' }, data=> {
    store.dispatch({...action, payload: data});
    console.log(data);
    console.log(action)
  });
};

const mapStateToProps = state => ({
  videos: state.videos,
  query: state.query,
  selectedVideo: state.selectedVideo
});

export default connect(mapStateToProps)(App);
