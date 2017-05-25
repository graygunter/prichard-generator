import React, { Component } from 'react';

class Keybutton extends Component {

  constructor() {

    super();

    this.keybuttonHasFile = this.keybuttonHasFile.bind(this);

    this.removeKeybuttonFile = this.removeKeybuttonFile.bind(this);

    this.updateFile = this.updateFile.bind(this);

    this.state = {

      file: undefined

    }

  }

  updateFile(fileName) {

    console.log("updateFile");

    this.setState({file : fileName});

  }

  removeKeybuttonFile(e) {

    e.stopPropagation();

    this.props.keybuttonFileRemoved(this);

    this.setState({file : undefined});

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

        <button onClick={this.removeKeybuttonFile}>
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </button>

        {this.state.file}
      </div>

    );

  }

  render() {
  
    return (

      <div className="virtual-keyboard-keybutton">
        {this.state.file === undefined ? this.keybuttonHasNoFile() : this.keybuttonHasFile()}
      </div>

    );
  
  }

}

export default Keybutton;
