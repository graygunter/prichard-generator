import React, { Component } from 'react';
import SoundQueueTile from './SoundQueueTile';
import SoundQueueButton from './SoundQueueButton';

class SoundQueue extends Component {

  generateSoundQueueTiles() {

    const tilesArray = [];

    for(let i = 0; i < this.props.soundQueuesArray.length; i++) {

      let newTile = (<SoundQueueTile
                                    file={this.props.soundQueuesArray[i]} 
                                    key={"SoundQueueTile" + i} />
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

        <SoundQueueButton
                        className="generate"  
                        icon="star"
                        onClick={this.props.playSoundQueue}
                        text="Generate" />

        <SoundQueueButton
                        className="reset"  
                        icon="refresh"
                        onClick={this.props.resetSoundQueue}
                        text="Reset" />

      </div>
    );
  }
}

export default SoundQueue;
