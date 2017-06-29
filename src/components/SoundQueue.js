import React, { Component } from 'react';
import SoundQueueTile from './SoundQueueTile';
import SoundQueueButton from './SoundQueueButton';

class SoundQueue extends Component {

  generateSoundQueueTiles() {

    const tilesArray = [];

    for(let i = 0; i < this.props.soundQueuesArray.length; i++) {

      let newTile = (<SoundQueueTile
                                    file={this.props.soundQueuesArray[i]} 
                                    key={"SoundQueueTile" + i} 
                                    removeQueueTile={this.props.removeQueueTile}/>
      );

      tilesArray.push(newTile);

    }

    return tilesArray;

  }

  render() {
    return (
      <div className="sound-queue">

        <h1 className="title">
        	Something to Generate
        	Something to Wrestle with
        	Bruce Prichard
        </h1>

        <div className="sound-queue-tiles">
        	{this.generateSoundQueueTiles()}
        </div>

        <div className="sound-queue-buttons">

          <SoundQueueButton
                            className="play" 
                            clickFunction={this.props.playSoundQueue} 
                            icon="star"
                            text="play" />

          <SoundQueueButton
                            className="reset"
                            clickFunction={this.props.resetSoundQueue}  
                            icon="refresh"
                            text="reset" />

        </div>

      </div>
    );
  }
}

export default SoundQueue;
