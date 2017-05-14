import React, { Component } from 'react';
import classNames from 'classnames';

class SoundTile extends Component {

  constructor() {

    super();

    this.getRandomSound = this.getRandomSound.bind(this);

    this.state = {

      file: undefined

    }

  }

  getRandomSound() {

    var randomSound = this.props.soundArray[this.props.randomNumber(this.props.soundArray.length)];
    for (var soundName in randomSound)

    this.setState({file : soundName});

  }

  render() {

    return (

      <div 
        className={classNames("sound-tile", this.props.name)}
        draggable="true"
        onDragStart={() => this.props.handleSoundTileDrag(this)}
        onDragEnd={() => this.props.handleSoundTileDragEnd(this)}>
        <button 
                className="sound-tile-play"
                onClick={() => this.props.handleSoundTilePlay(this.state.file)}>
                  <i className="fa fa-play" aria-hidden="true"></i>
        </button>
        <button 
                className="sound-tile-refresh"
                onClick={this.getRandomSound}>
                  <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <div className="title">{this.props.name}</div>
        <div className="icon"></div>
        <div className="file">{this.state.file}</div>

      </div>
    );

  }

  componentDidMount() {

    this.getRandomSound();

  }

}

export default SoundTile;
