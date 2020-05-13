import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'


class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchResults : [{name: 'name', artist: 'artist', album: 'album', id: 9},{name: 'name5', artist: 'artist5', album: 'album5', id: 5}],
      playListName : 'My playlist',
      playListTracks : [{name:"name1", artist: "name1", album: "album1", id :1},{name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'growlers', artist: 'growlers', album: 'growlers', id: 3}]
      
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this)
    this.search = this.search.bind(this);
  }
  updatePlayListName(name){
    this.setState({playListName: name})

  }

  addTrack(track){
    let tracks = this.state.playListTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
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
    const trackUris = this.state.playListTracks.map((track)=>track.uri)
  }

  search(term){
    console.log(term);

  }

  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
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
