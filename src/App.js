import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import Search from './components/Search';

const API_KEY = 'AIzaSyAEGffpXZAuR9_FpYlWSo5f28JW6ZgJgSE';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
        this.submitSearch = this.submitSearch.bind(this);
    }

    submitSearch(value) {
        YTSearch({key:API_KEY, term:'space'}, data=> {
            this.setState(prevState=>{
                return {
                    videos: prevState.videos.concat(data)
                }
            },()=>console.log(this.state.videos));
        });
    }

    render() {
        return (
            <Search submitSearch={this.submitSearch}/>
        );
    }
}

export default App;