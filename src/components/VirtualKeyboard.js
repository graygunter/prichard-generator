import React, { Component } from 'react';
import Keybutton from './Keybutton';

class VirtualKeyboard extends Component {

  constructor() {

    super();

    this.buildKeybuttonRow = this.buildKeybuttonRow.bind(this);

  }

  buildKeybuttons(keybutton, j) {
    return <Keybutton 
                      key={"keybutton" + j} 
                      keybuttonValue={keybutton}
                      soundFile=""/>
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
        {this.props.keyboardData.map(this.buildKeybuttonRow)}
      </div>
    );
  }
}

export default VirtualKeyboard;
