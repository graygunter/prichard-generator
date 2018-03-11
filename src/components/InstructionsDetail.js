import React, { Component } from 'react';
import classNames from 'classnames';

class InstructionsDetail extends Component {

  render() {

    return (

        <div className={
                classNames("instructions-detail", this.props.instructionsTitle + "-instructions")}>

            {this.props.instructionsText}

        </div>
    );

  }
}

export default InstructionsDetail;
