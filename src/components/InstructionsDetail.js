import React, { Component } from 'react';
import classNames from 'classnames';

class InstructionsDetail extends Component {

  render() {

    return (

        <div className={
                classNames("instructions-detail", this.props.instructionsTitle + "-instructions")}>

            <button 
              className="instructions-hide"
              onClick={() => this.props.handleInstructionHide(this.props.instructionsTitle)}
              title="Hide"></button>

            {this.props.instructionsText}

        </div>
    );

  }
}

export default InstructionsDetail;
