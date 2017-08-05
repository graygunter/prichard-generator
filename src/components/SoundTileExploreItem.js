import React, { Component } from 'react';

class SoundTileExploreItem extends Component {

  constructor() {

    super();

    this.buildTags = this.buildTags.bind(this);

  }

  buildTags() {

    var tagsArray = [];

    for(let i = 0; i < this.props.tags.length; i++) {

      if(this.props.tags[i] !== this.props.exploreTitle) {

        let tag = (<div className="tag"
                        key={"Tag-" + this.props.itemName + i}>
                    {this.props.tags[i]}
                  </div>);

        tagsArray.push(tag);

      }

    }

    return tagsArray;

  }

  render() {

    return (

      <div className="explore-item">

        <div className="explore-item-buttons">

          <button className="explore-item-play">
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>

          <button className="explore-item-select">
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>

        </div>

        <div className="explore-item-name">
          {this.props.itemName}
        </div>

        <div className="explore-item-tags">
          {this.buildTags()}
        </div>

      </div>
    );

  }

}

export default SoundTileExploreItem;
