import React, { Component } from 'react';
import SoundTileExploreItem from './SoundTileExploreItem';

class SoundTileExplore extends Component {

  generateSoundTileExploreFiles() {

    for(let i = 0; i < this.props.tileData.length; i++) {

        for(let file in this.props.tileData[i]) {

          console.log(file);
        
        }

    }

  }

  render() {

    return (

      <div className="sound-tile-explore">

        {this.generateSoundTileExploreFiles()}

      </div>
    );

  }

}

export default SoundTileExplore;
