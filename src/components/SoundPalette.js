import React, { Component } from 'react';
import SoundTile from './SoundTile';

class SoundPalette extends Component {

  generateSoundTiles() {

    console.log("Generate keys!");

    var audioData = this.props.audioData;

    var tilesArray = [];

    for(var tile in audioData)
    {

      var newTile = (<SoundTile 
                                key={"SoundTile-" + tile}
                                name={tile}/>);

      tilesArray.push(newTile);

    }

    return tilesArray;

  }

  render() {
    return (
      <div>
        {this.generateSoundTiles()}
      </div>
    );
  }
}

export default SoundPalette;
