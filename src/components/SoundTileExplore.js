import React, { Component } from 'react';
import SoundTileExploreItem from './SoundTileExploreItem';

class SoundTileExplore extends Component {

  constructor() {

    super();

    this.state = {

      currentSelection: undefined

    }

  }

  generateSoundTileExploreItems() {

    let exploreItemsArray = []

    for(let i = 0; i < this.props.tileData.length; i++) {

      for(let fileName in this.props.tileData[i]) {

        let currentObject = this.props.tileData[i];

        let currentTags = currentObject[fileName]["tags"];

        fileName = fileName.substring(fileName.indexOf("-") + 1, fileName.length);

        let newItem = <SoundTileExploreItem
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

    let iconPath = "url(\"" + require(`../imgs/icons/icon_${this.props.exploreTitle}.svg`) + "\")";

    let audioClipsString = "audio clip";

    if(this.props.tileData.length > 1)
      audioClipsString += "s";

    if(this.state.currentSelection) {

      var currentSelectionName = this.state.currentSelection;
      currentSelectionName = currentSelectionName.substring(currentSelectionName.indexOf("-") + 1, currentSelectionName.length);

    }

    return (

      <div className="sound-tile-explore">

        <div className="left-column">

          <h1 className="title">
            Something to Generate
            Something to Wrestle with
            Bruce Prichard
          </h1>

          <div className="explore-info">

            <h5>Now exploring the category: </h5>

            <h3>{this.props.exploreTitle}</h3>

            <div 
                  className="icon"
                  style={{backgroundImage: iconPath}}>    
            </div>

            <h4><span>{this.props.tileData.length}</span> {audioClipsString}</h4>

            <h5>Clip currently selected: </h5>
            <h5><span>{currentSelectionName}</span></h5>

          </div>

        </div>

        <button 
                className="back-button"
                onClick={() => this.props.handleBackClick()}>

                <div className="inner-text">
                  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i> back
                </div> 

        </button>

        <div className="explore-items">
          {this.generateSoundTileExploreItems()}
        </div>

      </div>
    );

  }

  componentDidMount() {

    this.setState({currentSelection: this.props.currentSelection});

  }

}

export default SoundTileExplore;
