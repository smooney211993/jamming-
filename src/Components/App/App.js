//import React from 'react';
import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import Spotify from '../../Util/Spotify.js'

/*

//project first written using class components as how codeacademy taught, however ive decided to rewrite the application using react hooks so i can compare which method is easier to read.
Both methods have the same level of performance.

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

*/

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState('My Playlist');
  const [playListTracks, setPlayListTracks] = useState([]);

  useEffect(()=>{
    Spotify.getAccessToken();
    // executes the getaccess token every singletime the application renders
  })

  const updatePlayListName = (name) =>{
    setPlayListName(name);

    // updates playlistname

  };

  const addTrack = (track) => {
    let tracks = playListTracks;
    if(tracks.includes(track)){
      return
    }
    setPlayListTracks([...playListTracks,track]);

    // addtracks to the playlist

  };

  const removeTrack = (track) => {
    setPlayListTracks(playListTracks.filter((currentTrack)=> currentTrack.id !== track.id));

    //removes tracks from playlist

  };

  const savePlayList = () =>{
    const trackURIs = playListTracks.map(track => track.uri);
    // iterates through the playlists array and returns a new array that consists of the track uri
    Spotify.savePlayList(playListName, trackURIs);
    setPlayListName('New Playlist');
    setPlayListTracks([]);

    // saves the playlist through a post request

  };

  const search = async (term) =>{
    const search = await Spotify.search(term);
    setSearchResults(search); 
    // searchs for tracks using the spotify api
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults
           searchResults={searchResults}
           onAdd={addTrack}
           />

          <Playlist 
          playListName ={playListName}
          playListTracks={playListTracks}
          onRemove={removeTrack}
          onNameChange={updatePlayListName}
          onSave={savePlayList}
            />
          
        </div>
      </div>
    </div>
  )


}

export default App;
