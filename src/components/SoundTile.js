import React, { Component } from 'react';
import classNames from 'classnames';

class SoundTile extends Component {

  render() {
    return (
      <div className={classNames("tile", this.props.name)}>
        <div className="tile-name">{this.props.name}</div>
        <div className="icon"></div>
      </div>
    );

  }
}

export default SoundTile;
