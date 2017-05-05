import React, { Component } from 'react';
import Keybutton from './Keybutton';

class Keyboard extends Component {

  constructor() {

    super();

    this.generateKeys = this.generateKeys.bind(this);

  }

  generateKeys() {

    console.log("Generate keys!");

    //console.log(this.props.keysData);

    var keysData = this.props.keysData;

    var keysArray = [];

    for(var key in keysData)
    {

      var newKey = (<Keybutton 
                        key={"key-" + key} 
                        keyLetter={keysData[key].keyLetter}
                        keyName={key}
                        keyIcon={"icon-" + key}
                        handleClick={this.props.handleClick}
                        />);
    
      keysArray.push(newKey);

    }
    return keysArray;

  }

  render() {
    return (
      <div>
      	{this.generateKeys()}
      </div>
    );
  }
}

export default Keyboard;
