import React, { Component } from 'react';
import SoundTile from './SoundTile';

class SoundPalette extends Component {

  generateSoundPaletteTiles() {

    const audioData = this.props.audioData;

    let tilesArray = [];

    for(let tile in audioData)
    {

      let soundArray = audioData[tile];

      let newTile = (<SoundTile 
                                handleSoundTileDrag={this.props.handleSoundTileDrag}
                                handleSoundTileDragEnd={this.props.handleSoundTileDragEnd}
                                handleSoundTilePlay={this.props.handleSoundTilePlay}
                                key={"SoundPaletteTile-" + tile}
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
        {this.generateSoundPaletteTiles()}
      </div>
    );
  }
}

export default SoundPalette;
