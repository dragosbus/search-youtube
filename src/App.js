import React, {Component} from 'react';

import Search from './components/Search';


const API_KEY = 'AIzaSyAEGffpXZAuR9_FpYlWSo5f28JW6ZgJgSE';

class App extends Component {
    constructor(props) {
        super(props);
        this.submitSearch = this.submitSearch.bind(this);
    }

    submitSearch(value) {
        console.log(value);
    }

    render() {
        return (
            <Search submitSearch={this.submitSearch}/>
        );
    }
}

export default App;