import React, { Component } from 'react';
import PlaylistTile from './PlaylistTile';
import PlaylistButton from './PlaylistButton';

class Playlist extends Component {

  generatePlaylistTiles() {

    const tilesArray = [];

    for(let i = 0; i < this.props.playlistArray.length; i++) {

      let newTile = (<PlaylistTile
                                    file={this.props.playlistArray[i]}
                                    id={i} 
                                    key={"PlaylistTile" + i} 
                                    removePlaylistTile={this.props.removePlaylistTile}/>
      );

      tilesArray.push(newTile);

    }

    return tilesArray;

  }

  render() {
    return (
      <div className="left-column">

        <div className="playlist-tiles">
          <div className="playlist-title">
            playlist
          </div>
        	{this.generatePlaylistTiles()}
        </div>

        <div className="playlist-buttons">

          <PlaylistButton
                            className="play" 
                            clickFunction={this.props.playPlaylist} 
                            icon="star"
                            text="play" />

          <PlaylistButton
                            className="reset"
                            clickFunction={this.props.resetPlaylist}  
                            icon="refresh"
                            text="reset" />

        </div>

      </div>
    );
  }
}

export default Playlist;
