import React, { Component } from 'react';
import SoundTileExploreItem from './SoundTileExploreItem';

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
                                            addToSoundQue={this.props.addToSoundQue}
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

        <div className="left-column">

          <h1 className="title">
            Something to Generate
            Something to Wrestle with
            Bruce Prichard
          </h1>

          <div className="explore-info">

            <h5>Now exploring the category: </h5>

            <h3
                className={this.props.exploreTitle.length > 10 ? "small" : null}
                >{this.props.exploreTitle}</h3>

            <div 
                  className="icon"
                  style={{backgroundImage: iconPath}}>    
            </div>

            <h4><span>{this.props.tileData.length}</span> {audioClipsString}</h4>

            <input  type="text"
                    onBlur={this.onBlur.bind(this)}
                    onChange={this.onChangeHandler.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    value={this.state.filterInput} />

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

}

export default SoundTileExplore;
