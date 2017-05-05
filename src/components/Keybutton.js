import React, { Component } from 'react';

class Keybutton extends Component {
  render() {
    return (

    	<div 
    		data-name={this.props.keyName}
    		data-letter={this.props.keyLetter} 
    		className="key" 
    		onClick={() => this.props.handleClick(this.props.keyName)}>
	      <kbd>{this.props.keyLetter}</kbd>
	      <span className="sound">{this.props.keyName}</span>
	    </div>

    );
  }
}

export default Keybutton;
