import React, { Component } from 'react';
import classNames from 'classnames';

class SoundTileExploreItem extends Component {

  constructor() {

    super();

    this.buildTags = this.buildTags.bind(this);

    this.state = {

      isCurrentlySelected: false

    }

  }

  buildTags() {

    var tagsArray = [];

    for(let i = 0; i < this.props.tags.length; i++) {

      if(this.props.tags[i] !== this.props.exploreTitle) {

        let tag = (<div className="tag"
                        key={"Tag-" + this.props.itemName + i}>
                          {"#" + this.props.tags[i]}
                  </div>);

        tagsArray.push(tag);

      }

    }

    return tagsArray;

  }

  showSelectButton() {

    return (

      <button
        className="select-button"
        onClick={() => this.props.soundTileFileSelected(this.props.exploreTitle + "-" + this.props.itemName)}>

          <div className="inner-text">
            Select
          </div>
      </button>

    );

  }

  showSelectedTag() {

    return (

      <div className="selected-tag">

        <div className="selected-tag-text">
          Selected
        </div>

      </div>

    )

  }

  render() {

    return (

      <div className={
        classNames("explore-item", this.state.isCurrentlySelected ? "selected" : null)}>

        {this.state.isCurrentlySelected ? this.showSelectedTag() : this.showSelectButton()}

        <div className="explore-item-name-and-button">

          <div className="explore-item-name">
            {this.props.itemName}
          </div>

          <button 
                  className="explore-item-play"
                  onClick={() => this.props.handleSoundPlay(this.props.exploreTitle + "-" + this.props.itemName)}>
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>

        </div>

        <div className="explore-item-tags">
          {this.buildTags()}
        </div>

      </div>
    );

  }

  componentDidMount() {

    if(this.props.exploreTitle + "-" + this.props.itemName === this.props.currentSelection)
      this.setState({isCurrentlySelected : true});

  }

}

export default SoundTileExploreItem;
