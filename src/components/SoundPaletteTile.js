import React, { Component } from 'react';
import classNames from 'classnames';

class SoundPaletteTile extends Component {

  constructor() {

    super();

    this.getRandomSound = this.getRandomSound.bind(this);

    this.returnFileName = this.returnFileName.bind(this);

    this.state = {

      file: undefined

    }

  }

  returnFileName(fileName) {

    return fileName.substring(fileName.indexOf("-") + 1, fileName.length);

  }

  createIconAndFile() {

    let fileName = String(this.state.file);

    let category = String(this.props.category).charAt(0).toUpperCase() + String(this.props.category).slice(1);


/*  NEEDS TO BE TESTED: Method for subbing PNGs for iE browsers below iE11

    let fileType = "svg";

    if (isIE () && isIE () < 11) {

      fileType = "png";

    }

*/

    let iconPath = "url(\"" + require(`../imgs/icons/icon_${fileName.substring(0, fileName.indexOf("-"))}.svg`) + "\")";

    //console.log("$$$ " + iconPath);

    fileName = this.returnFileName(fileName);


    return (
            <div className="icon-and-file">

              <button 
                      className="icon"
                      onClick={() => this.props.handleSoundTileExplore(this.props.category)}
                      title={"Explore " + category}
                      style={{backgroundImage: iconPath}}>

              </button>

              <div className={
                classNames("file", fileName.length > 12 ? "small" : null)}>
                  {fileName}
              </div>              
            </div>
    );

  }

  getRandomSound() {

    let randomSound = this.props.soundArray[this.props.randomNumber(this.props.soundArray.length)];

    for (let soundName in randomSound) {

      this.setState({file : soundName});

      this.props.soundTileFileSelected(this.props.category, soundName);
    
    }

  }

  render() {

    return (

      <div 
        className={classNames("sound-tile", this.props.category)}>
        
          {this.state.file !== undefined ? this.createIconAndFile() : null}

          <div className="sound-tile-buttons">
            
            <button 
                    className="sound-tile-play"
                    onClick={() => this.props.handleSoundPlay(this.state.file)}
                    title="Test Play">
                      <i className="fa fa-play" aria-hidden="true"></i>
            </button>
            
            <button 
                    className="sound-tile-explore"
                    onClick={() => this.props.handleSoundTileExplore(this.props.category)}
                    title="Explore Audio Files">
                      <i className="fa fa-search" aria-hidden="true"></i>
            </button>

            <button 
                    className="sound-tile-refresh"
                    onClick={this.getRandomSound}
                    title="Random Refresh">
                      <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>

            <button 
                    className="sound-tile-add"
                    onClick={() => this.props.addToSoundQue(this.state.file)}
                    title="Add to Sound Que">
                      <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

          </div>

      </div>
    );

  }

  componentDidMount() {

    //console.log("this.props.currentSoundTileFile: " + this.props.currentSoundTileFile)

    if(!this.props.currentSoundTileFile) 
    {
      this.getRandomSound();
    }
    else {
      this.setState({file : this.props.currentSoundTileFile});
    }

  }

}

export default SoundPaletteTile;
