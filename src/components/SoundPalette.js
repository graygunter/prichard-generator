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
                                handleSoundTileDrag={this.props.handleSoundTileDrag}
                                handleSoundTileDragEnd={this.props.handleSoundTileDragEnd}
                                handleSoundTileExplore={this.props.handleSoundTileExplore}
                                handleSoundPlay={this.props.handleSoundPlay}
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
