import React, { Component } from 'react';
import SoundQueueTile from './SoundQueueTile';

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

        <div className="title">
        	<span>Something to Generate</span>
        	<span>Something to Wrestle with</span>
        	<span>Bruce Prichard</span>
        </div>

        <div className="sound-queue-tiles">
        	{this.generateSoundQueueTiles()}
        </div>

        <button onClick={this.props.playSoundQueue}>
        	Generate
        </button>

        <button onClick={this.props.resetSoundQueue}>
          Reset
        </button>

      </div>
    );
  }
}

export default SoundQueue;
