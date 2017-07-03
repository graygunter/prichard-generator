import React, { Component } from 'react';

class VirtualKeybutton extends Component {

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
        
        <span>
          {this.props.keybuttonValue}
        </span>

      </div>
    );

  }

  keybuttonHasFile() {

    let fileName = String(this.state.file);
    let iconPath = "url(\"" + require(`../imgs/icons/icon_${fileName.substring(0, fileName.indexOf("-"))}.svg`) + "\")";
    
    //console.log("### " + iconPath);
    
    return (
      
      <div className="inner-keybutton has-file"
        onClick={() => this.props.handleKeybuttonClick(this)}
        onDragOver={this.props.handleKeybuttonDragOver}
        onDrop={() => this.props.handleSoundTileDrop(this)}>

        <button onClick={this.removeKeybuttonFile}>
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </button>

        <div 
            className="icon"
            style={{backgroundImage: iconPath}}>    
        </div>

        <span>
          {this.props.keybuttonValue}
        </span>

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

export default VirtualKeybutton;
