import React from 'react'
import './Playlist.css'

import TrackList from '../TrackList/TrackList'


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
        this.props.onNameChange(this.state.playListName)
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

export default Playlist;