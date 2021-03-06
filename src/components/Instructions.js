import React, { Component } from 'react';
import InstructionsDetail from './InstructionsDetail';


class Instructions extends Component {

  buildInstructions() {

    let instructionsArray = [];

    for(let instruction in this.props.instructionsData) {

      let newInstruction = <InstructionsDetail
                                                key={instruction + "instruction"}
                                                instructionsTitle={instruction}
                                                instructionsText={this.props.instructionsData[instruction][0]["text"]}/>

      instructionsArray.push(newInstruction);

    }

    return instructionsArray;

  }

  render() {

    return (

      <div className="instructions">
        {this.buildInstructions()}
      </div>

    );

  }
}

export default Instructions;
