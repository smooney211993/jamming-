import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import Spotify from '../../Util/Spotify.js'


class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchResults : [],
      playListName : 'My playlist',
      playListTracks : []
      
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this)
    this.search = this.search.bind(this);
  }
  componentDidMount() {
    Spotify.getAccessToken();
  }
  updatePlayListName(name){
    this.setState({playListName: name})

  }

  addTrack(track){
    let tracks = this.state.playListTracks;
    if(tracks.includes(track)){
      return
    }
    
    this.setState({
      playListTracks: [...this.state.playListTracks,track]
      });
    }

  removeTrack(track){
      this.setState({
        playListTracks: this.state.playListTracks.filter((currentTrack)=> currentTrack.id !== track.id)

      });
    }
   savePlayList(){
    const trackURIs = this.state.playListTracks.map(track => track.uri);
        Spotify.savePlayList(this.state.playListName, trackURIs);
        this.setState({playListName: 'New Playlist', playListTracks: []});
  }

  async search(term){
    const search = await Spotify.search(term)
    this.setState({
      searchResults: search

    })

  }

  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
             searchResults={this.state.searchResults}
             onAdd={this.addTrack}
             />

            <Playlist 
            playListName ={this.state.playListName}
            playListTracks={this.state.playListTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlayListName}
            onSave={this.savePlayList}
              />
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;
