import React, { Component } from 'react';

class Keybutton extends Component {

  render() {
    return (
      <div className="virtual-keyboard-keybutton">
        {this.props.keybuttonValue}
      </div>
    );
  }
}

export default Keybutton;
