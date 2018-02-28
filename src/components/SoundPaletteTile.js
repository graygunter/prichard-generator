import React, { Component } from 'react';

class SoundPaletteTile extends Component {


  createIconAndFile() {

    let category = String(this.props.category).charAt(0).toUpperCase() + String(this.props.category).slice(1);

/*  NEEDS TO BE TESTED: Method for subbing PNGs for iE browsers below iE11

    let fileType = "svg";

    if (isIE () && isIE () < 11) {

      fileType = "png";

    }

*/

    let iconPath = "url(\"" + require(`../imgs/icons/icon_${this.props.category}.svg`) + "\")";

    //console.log("$$$ " + iconPath);

    return (

            <button 
                    className="icon"
                    onClick={() => this.props.handleSoundTileExplore(this.props.category)}
                    title={"Explore " + category}
                    style={{backgroundImage: iconPath}}>

            </button>

    );

  }

  render() {

    let category = String(this.props.category).charAt(0).toUpperCase() + String(this.props.category).slice(1);

    return (

      <div 
        className={"sound-tile"}>

          <div className="sound-tile-category">
            {this.props.category}
          </div>
  
          <div className="icon-and-buttons">

            {this.createIconAndFile()}

            <div className="sound-tile-buttons">
              
              <button 
                      className="sound-tile-random"
                      onClick={() => this.props.handleSoundTileRandom(this.props.category)}
                      title={"Play Random " + category + " audio clip"}>
                        <div className="inner-text">
                          <i className="fa fa-play" aria-hidden="true"></i> random
                        </div>
              </button>
              
              <button 
                      className="sound-tile-explore"
                      onClick={() => this.props.handleSoundTileExplore(this.props.category)}
                      title={"Explore " + category + "'s audio clips"}>
                        <div className="inner-text">
                          <i className="fa fa-search" aria-hidden="true"></i> explore
                        </div>
              </button>

            </div>

          </div>

      </div>
    );

  }

}

export default SoundPaletteTile;
