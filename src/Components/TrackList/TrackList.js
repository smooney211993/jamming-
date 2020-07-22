import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'
/*class TrackList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="TrackList">
                {this.props.tracks.map((track)=>{
                    return <Track track={track} 
                    key={track.id}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}
                     />})}
            </div>
        )
    }
}

*/
const TrackList = (props) =>{
    const {tracks, onAdd, onRemove, isRemoval} = props;

    return (
        <div className="TrackList">
            {tracks.map((track)=>{
                return <Track track={track} 
                key={track.id}
                onAdd={onAdd}
                onRemove={onRemove}
                isRemoval={isRemoval}
                 />})}
        </div>
    )
    
}



export default TrackList;