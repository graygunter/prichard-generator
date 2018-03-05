import React, { Component } from 'react';
import SoundTileExploreItem from './SoundTileExploreItem';
import TopBar from './TopBar';

class SoundTileExplore extends Component {

  constructor(){
    
    super();
    
    this.filterByTags = this.filterByTags.bind(this);

    this.state ={
      
      filterInput: 'Filter by tag'
    
    }

  }

  onChangeHandler(e){

    this.setState({filterInput: e.target.value})

  }

  onFocus(e){

    if(e.target.value === 'Filter by tag')
          this.setState({filterInput: ''})

  }

  onBlur(e){

    if(e.target.value === '' || e.target.value === ' ')
          this.setState({filterInput: 'Filter by tag'})

  }

  filterByTags (tile) {

    let hideFile = false;

    if(this.state.filterInput !== '' && this.state.filterInput !== 'Filter by tag') {

      for(let fileName in tile) {

        let currentTags = tile[fileName]["tags"];

        for(let i = 0; i < currentTags.length; i++) {

          //console.log(currentTags[i] + " / " + this.state.filterInput));
          if(currentTags[i].indexOf(this.state.filterInput) > -1)
            hideFile = true;

        }

      }

    }
    else {

      hideFile = true;

    }

    if(hideFile)
      return tile

  }

  generateSoundTileExploreItems() {

    let exploreItemsArray = []

    let filteredTileData = this.props.tileData;

    filteredTileData = filteredTileData.filter(this.filterByTags);

    //console.log(filteredTileData);

    for(let i = 0; i < filteredTileData.length; i++) {

      for(let fileName in filteredTileData[i]) {

        let currentObject = filteredTileData[i];

        let currentTags = currentObject[fileName]["tags"];

        fileName = fileName.substring(fileName.indexOf("-") + 1, fileName.length);

        let newItem = <SoundTileExploreItem
                                            addToPlaylist={this.props.addToPlaylist}
                                            exploreTitle={this.props.exploreTitle}
                                            handleSoundPlay={this.props.handleSoundPlay}
                                            itemName={fileName} 
                                            key={"SoundTileExploreItem-" + fileName} 
                                            tags={currentTags}/>

        exploreItemsArray.push(newItem);
      
      }

    }

    return exploreItemsArray;

  }

  render() {

    //console.log("SoundTileExplore rendered!");

    let iconPath = "url(\"" + require(`../imgs/icons/icon_${this.props.exploreTitle}.svg`) + "\")";

    let audioClipsString = "audio clip";

    if(this.props.tileData.length > 1)
      audioClipsString += "s";

    return (

      <div className="sound-tile-explore">

        <TopBar
                audioClipsString={audioClipsString}
                exploreTitle={this.props.exploreTitle}
                filterInput={this.state.filterInput}
                handleBackClick={this.props.handleBackClick}
                iconPath={iconPath}
                isExplorePage={true}
                isLandingPage={false}
                numberOfClips={this.props.tileData.length}
                onBlur={this.onBlur.bind(this)}
                onChangeHandler={this.onChangeHandler.bind(this)}
                onFocus={this.onFocus.bind(this)}
                value={this.state.filterInput} />

        <div className="explore-items">
          {this.generateSoundTileExploreItems()}
        </div>

      </div>
    );

  }

}

export default SoundTileExplore;
