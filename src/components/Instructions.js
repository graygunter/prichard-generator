import React, { Component } from 'react';

class Instructions extends Component {

  render() {

    return (

      <div className="instructions">

        <div className="about-instructions instructions-detail">

            <button 
              className="instructions-close"
              title="Close"></button>

            Find out more about STGSTW

        </div>

        <div className="sound-queue-instructions instructions-detail">

            <button 
              className="instructions-close"
              title="Close"></button>

            Audio clips added to the sound queue play back in order when you press the play button

        </div>

        <div className="category-instructions instructions-detail">

            <button 
              className="instructions-close"
              title="Close"></button>

            Audio clips are organized by category. For example clips of Bruce Prichard talking go in 'BRUCE'

        </div>

        <div className="scroll-instructions instructions-detail">

            <button 
              className="instructions-close"
              title="Close"></button>

            Scroll the categories to see more

        </div>

      </div>

    );

  }
}

export default Instructions;
