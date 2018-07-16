import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import {Search} from './components/Search';
import {VideoList} from './components/VideosList';

const API_KEY = 'AIzaSyAEGffpXZAuR9_FpYlWSo5f28JW6ZgJgSE';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'space' }, data => {
        this.setState(
          prevState => {
            return {
              videos: prevState.videos.concat(data)
            };
          },
          () => console.log(this.state.videos)
        );
      });
  }

  submitSearch(value) {
    YTSearch({ key: API_KEY, term: value }, data => {
      this.setState(
        prevState => {
          return {
            videos: prevState.videos.concat(data)
          };
        },
        () => console.log(this.state.videos)
      );
    });
  }

  render() {
    return (
      <div className="app">
        <Search submitSearch={this.submitSearch} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
