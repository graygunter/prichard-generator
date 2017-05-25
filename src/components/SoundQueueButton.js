import React, { Component } from 'react';

class SoundQueueButton extends Component {

  render() {
    return (

	    <button onClick={this.props.playSoundQueue}>
	    	<div className="inner-text">
				<i className={"fa fa-" + this.props.icon} aria-hidden="true"></i>
				&nbsp;
				{this.props.text}
				&nbsp;
				<i className={"fa fa-" + this.props.icon} aria-hidden="true"></i>
			</div>
	    </button>

    );

  }
}

export default SoundQueueButton;
