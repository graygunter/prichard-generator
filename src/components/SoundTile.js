import React, { Component } from 'react';
import classNames from 'classnames';

class SoundTile extends Component {

  render() {
    return (
      <div 
        className={classNames("sound-tile", this.props.name)}>
        <button 
                className="sound-tile-play"
                onClick={() => this.props.handleSoundTilePlay(this.props.file)}>play</button>
        <button 
                className="sound-tile-refresh"
                onClick={() => this.props.handleSoundTileRefresh(this.props.name)}>refresh</button>
        <div className="title">{this.props.name}</div>
        <div className="icon"></div>
        <div className="file">{this.props.file}</div>

      </div>
    );

  }
}

export default SoundTile;
