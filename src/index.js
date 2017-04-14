import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA1KzTsbnjZJA0mWmfHZ8QnidST-dBM6Hs';


// Cerate new component that produces html
class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { videos: [],
    selectedVideo: null
   };
    // videos is the data.  set array to array of videos = (videos: videos)

    YTSearch({key: API_KEY, term: 'hockeyfights'}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
  return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}
// Take this component generagetd HTML and put in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
