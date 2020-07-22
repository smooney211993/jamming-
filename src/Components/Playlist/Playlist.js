//import React from 'react'
import React, {useState} from 'react';
import './Playlist.css'

import TrackList from '../TrackList/TrackList'

/*

class Playlist extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            playListName : this.props.playListName
        }
       
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    
    handleNameChange(event){
        this.setState({playListName: event.target.value})
        this.props.onNameChange(event.target.value)
    }
    render(){
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playListName} onChange={this.handleNameChange} />
                <TrackList 
                tracks = {this.props.playListTracks}
                onRemove={this.props.onRemove}
                isRemoval ={true}
                
                />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

*/
const Playlist = (props) => {
    const {playListName, playListTracks, onRemove, onSave, onNameChange} = props;
    const [name, setName] = useState(playListName);
    
    const handleNameChange = (event) =>{
        setName(event.target.value);
        onNameChange(event.target.value);
    }
    return (
        <div className="Playlist">
            <input defaultValue={playListName} onChange={handleNameChange} />
            <TrackList 
            tracks = {playListTracks}
            onRemove={onRemove}
            isRemoval ={true}
            
            />
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}



export default Playlist;