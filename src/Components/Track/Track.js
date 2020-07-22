//import React from 'react';
import React, {useState} from 'react';
import './Track.css';

/*
class Track extends React.Component {
    constructor(props){
        super(props)
        

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack  = this.removeTrack.bind(this);
    }
    addTrack(){
       this.props.onAdd(this.props.track)
    }
    
    removeTrack(){
        this.props.onRemove(this.props.track)
    }
    renderAction(){
        if(this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }

    }
    render(){
        const {track} = this.props;
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album}</p>
                </div>
                {this.renderAction()}   
            </div>
        )
    }
}

*/

const Track = (props) => {
    const {onAdd, onRemove, isRemoval, track} = props;
    const addTrack = () => {
        onAdd(track);

    };

    const removeTrack = () =>{
        onRemove(track);
    };

    const renderAction = () => {
        if(isRemoval) {
            return <button className="Track-action" onClick={removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>

        }
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}   
        </div>
    )


}

export default Track;