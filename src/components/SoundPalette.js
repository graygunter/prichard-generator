import React, { Component } from 'react';
import SoundTile from './SoundTile';

class SoundPalette extends Component {

  generateSoundTiles() {

    console.log("Generate keys!");

    var audioData = this.props.audioData;

    var tilesArray = [];

    for(var tile in audioData)
    {
      var tempObj = `${audioData[tile]}`;
      console.log(tempObj);

      var newTile = (<SoundTile 
                                key={"SoundTile-" + tile}
                                name={tile}
                                handleSoundTilePlay={this.props.handleSoundTilePlay}
                                handleSoundTileRefresh={this.props.handleSoundTileRefresh}/>);

      tilesArray.push(newTile);

    }

    return tilesArray;

  }

  render() {
    return (
      <div className="sound-palette">
        {this.generateSoundTiles()}
      </div>
    );
  }
}

export default SoundPalette;
