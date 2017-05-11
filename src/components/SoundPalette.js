import React, { Component } from 'react';
import SoundTile from './SoundTile';

class SoundPalette extends Component {

  generateSoundTiles() {

    var audioData = this.props.audioData;

    var tilesArray = [];

    for(var tile in audioData)
    {

      let soundArray = audioData[tile];

      var newTile = (<SoundTile 
                                handleSoundTileDrag={this.props.handleSoundTileDrag}
                                handleSoundTileDragEnd={this.props.handleSoundTileDragEnd}
                                handleSoundTilePlay={this.props.handleSoundTilePlay}
                                key={"SoundTile-" + tile}
                                name={tile}
                                randomNumber={this.props.randomNumber}
                                soundArray={soundArray}/>);

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
