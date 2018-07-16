import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import {Search} from './components/Search';
import {VideoList} from './components/VideosList';
import {Video} from './components/Video';

const API_KEY = 'AIzaSyAEGffpXZAuR9_FpYlWSo5f28JW6ZgJgSE';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'space' }, data => {
        this.setState(
          prevState => {
            return {
              videos: prevState.videos.concat(data)
            };
          },
          () => {
              this.setState({
                selectedVideo: this.state.videos[0]
              });
          }
        );
      });
  }

  submitSearch(value) {
    YTSearch({ key: API_KEY, term: value }, data => {
      this.setState(
        () => {
          return {
            videos: [].concat(data)
          };
        },
        () => {
            this.setState({
                selectedVideo: this.state.videos[0]
            });
        }
      );
    });
  }

  selectVideo(index) {
      this.setState({
        selectedVideo: this.state.videos[index]
      });
  }

  render() {
    return (
      <div className="app">
        <Search submitSearch={this.submitSearch} />
        <Video video = {this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} selectVideo={this.selectVideo}/>
      </div>
    );
  }
}

export default App;
