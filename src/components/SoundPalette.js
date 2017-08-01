import React, { Component } from 'react';
import SoundPaletteTile from './SoundPaletteTile';

class SoundPalette extends Component {

  generateSoundPaletteTiles() {

    const audioData = this.props.audioData;

    let tilesArray = [];

    for(let tile in audioData)
    {

      let soundArray = audioData[tile];

      let newTile = (<SoundPaletteTile 
                                handleSoundTileDetail={this.props.handleSoundTileDetail}
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
