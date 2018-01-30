import React, { Component } from 'react';
import SoundPaletteTile from './SoundPaletteTile';

class SoundPalette extends Component {

  generateSoundPaletteTiles() {

    const audioData = this.props.audioData;

    let tilesArray = [];

    for(let tileCategory in audioData)
    {

      let newTile = (<SoundPaletteTile 
                                category={tileCategory}
                                handleSoundTileExplore={this.props.handleSoundTileExplore}
                                handleSoundTileRandom={this.props.handleSoundTileRandom}
                                key={"SoundPaletteTile-" + tileCategory}
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
