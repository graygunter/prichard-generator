import React, { Component } from 'react';
import SoundPaletteTile from './SoundPaletteTile';

class SoundPalette extends Component {

  generateSoundPaletteTiles() {

    const audioData = this.props.audioData;

    let tilesArray = [];

    for(let tileCategory in audioData)
    {

      let soundArray = audioData[tileCategory];

      let newTile = (<SoundPaletteTile 
                                category={tileCategory}
                                currentSoundTileFile={this.props.currentSoundTileFiles[tileCategory]}
                                handleSoundTileDrag={this.props.handleSoundTileDrag}
                                handleSoundTileDragEnd={this.props.handleSoundTileDragEnd}
                                handleSoundTileExplore={this.props.handleSoundTileExplore}
                                handleSoundPlay={this.props.handleSoundPlay}
                                key={"SoundPaletteTile-" + tileCategory}
                                randomNumber={this.props.randomNumber}
                                soundArray={soundArray}
                                soundTileFileSelected={this.props.soundTileFileSelected}
                                />);

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
