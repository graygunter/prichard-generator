import React, { Component } from 'react';

class SoundQueueTile extends Component {

  render() {
    return (
      <div className="sound-queue-tile">
        {this.props.file}
      </div>
    );

  }
}

export default SoundQueueTile;
