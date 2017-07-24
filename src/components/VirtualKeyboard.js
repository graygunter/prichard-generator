import React, { Component } from 'react';
import VirtualKeybutton from './VirtualKeybutton';
import VirtualKeyboardBackground from './VirtualKeyboardBackground';

class VirtualKeyboard extends Component {

  constructor() {

    super();

    this.buildKeybuttonRow = this.buildKeybuttonRow.bind(this);
    this.buildKeybuttons = this.buildKeybuttons.bind(this);

  }

  buildKeybuttons(keybutton, j) {
    
    return <VirtualKeybutton 
                      handleDragOver={this.props.handleDragOver}
                      handleSoundTileDrop={this.props.handleSoundTileDrop}
                      handleKeybuttonClick={this.props.handleKeybuttonClick}
                      handleKeybuttonDragOver={this.props.handleKeybuttonDragOver}
                      key={"keybutton" + j} 
                      keybuttonFileRemoved={this.props.keybuttonFileRemoved}
                      keybuttonValue={keybutton}/>

  }

  buildKeybuttonRow(keybuttonRow, i) {

    return (

      <div key={"keybuttonRow" + i} className="virtual-keyboard-keybutton-row">
        
        {keybuttonRow.map(this.buildKeybuttons)}

      </div>

    )

  }

  render() {
    return (
  
      <div className="virtual-keyboard">
        
        <div className="virtual-keyboard-rows">
          {this.props.keyboardData.map(this.buildKeybuttonRow)}
        </div>
        
        <VirtualKeyboardBackground 
                                    backgroundData={this.props.backgroundData}/>

      </div>
    );
  }

}

export default VirtualKeyboard;
