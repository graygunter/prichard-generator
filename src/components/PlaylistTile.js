import React, { Component } from 'react';

class PlaylistTile extends Component {

  render() {

    let fileName = String(this.props.file);
    let iconPath = "url(\"" + require(`../imgs/icons/icon_${fileName.substring(0, fileName.indexOf("-"))}.svg`) + "\")";
    let textName = this.props.file;
    textName = textName.substring(this.props.file.indexOf('-') + 1);

    return (
      <div className="sound-queue-tile">

        <div 
            className="icon"
            style={{backgroundImage: iconPath}}>    
        </div>
        
        <div className="text">
        	{textName}
        </div>

        <button onClick={() => this.props.removePlaylistTile(this.props.id)}>
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </button>

      </div>
    );

  }
}

export default PlaylistTile;
