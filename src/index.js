import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyA1KzTsbnjZJA0mWmfHZ8QnidST-dBM6Hs';

YTSearch({key: API_KEY, term: 'hockey fights'}, function(data) {
  console.log(data);
});

// Cerate new component that produces html
class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    // videos is the data.  set array to array of videos = (videos: videos)
    YTSearch({key: API_KEY, term: 'hockeyfights'}, (videos) => {
      this.setState({ videos });
    });
  }
  render(){
  return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
// Take this component generagetd HTML and put in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
