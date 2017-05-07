import React, { Component } from 'react';

class Keybutton extends Component {

  render() {
    return (
      <div className="virtual-keyboard-keybutton">
        {this.props.keyValue}
      </div>
    );
  }
}

export default Keybutton;
