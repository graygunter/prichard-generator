import React, { Component } from 'react';
import classNames from 'classnames';

class SoundPaletteTile extends Component {

  constructor() {

    super();

    this.getRandomSound = this.getRandomSound.bind(this);

    this.state = {

      file: undefined

    }

  }

  createIconAndFile() {

    let fileName = String(this.state.file);
    let iconPath = "url(\"" + require(`../imgs/icons/icon_${fileName.substring(0, fileName.indexOf("-"))}.svg`) + "\")";

    console.log(iconPath);

    fileName = fileName.substring(fileName.indexOf("-") + 1, fileName.length);

    return (
            <div className="icon-and-file">
              <div 
                    className="icon"
                    style={{backgroundImage: iconPath}}>    
              </div>
              <div className="file">{fileName}</div>
            </div>
    );

  }

  getRandomSound() {

    var randomSound = this.props.soundArray[this.props.randomNumber(this.props.soundArray.length)];

    for (var soundName in randomSound) {

      this.setState({file : soundName});
    
    }

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
          
          {this.state.file !== undefined ? this.createIconAndFile() : null}

      </div>
    );

  }

  componentDidMount() {

    this.getRandomSound();

  }

}

export default SoundPaletteTile;
