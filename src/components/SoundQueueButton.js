import React, { Component } from 'react';

class SoundQueueButton extends Component {

  render() {
    return (

	    <button className={this.props.className}
	    		onClick={this.props.clickFunction}>
	    	<div className="inner-text">
				<i className={"fa fa-" + this.props.icon} aria-hidden="true"></i>
				&nbsp;
				{this.props.text}
			</div>
	    </button>

    );

  }
}

export default SoundQueueButton;
