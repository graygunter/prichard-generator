import React, { Component } from 'react';

class Keybutton extends Component {

  constructor() {

    super();

    this.updateFile = this.updateFile.bind(this);

    this.state = {

      file: undefined

    }

  }

  updateFile(fileName) {

    this.setState({"file" : fileName});

  }

  render() {
    return (
      <div 
      	className="virtual-keyboard-keybutton"
        onClick={() => this.props.handleKeybuttonClick(this)}
      	onDragOver={this.props.handleKeybuttonDragOver}
      	onDrop={() => this.props.handleSoundTileDrop(this)}>
        {this.props.keybuttonValue}
      </div>
    );
  }
}

export default Keybutton;
