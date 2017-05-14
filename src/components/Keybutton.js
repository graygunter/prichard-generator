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

  keybuttonHasNoFile() {

    return (
      <div className="inner-keybutton"
        onDragOver={this.props.handleKeybuttonDragOver}
        onDrop={() => this.props.handleSoundTileDrop(this)}>
        {this.props.keybuttonValue}
      </div>
    );

  }

  keybuttonHasFile() {

    return (
      
      <div className="inner-keybutton has-file"
        onClick={() => this.props.handleKeybuttonClick(this)}
        onDragOver={this.props.handleKeybuttonDragOver}
        onDrop={() => this.props.handleSoundTileDrop(this)}>
        {this.state.file}
      </div>

    );

  }

  render() {
  
    return (

      <div className="virtual-keyboard-keybutton">
        {this.state.file === undefined ?  this.keybuttonHasNoFile() : this.keybuttonHasFile()}
      </div>

    );
  
  }

}

export default Keybutton;
