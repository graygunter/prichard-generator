import React, { Component } from 'react';

class Audio extends Component {

  generateAudios() {

    console.log("Generate audio!");

    //console.log(this.props.audioData);

    var audioData = this.props.audioData;

    var charactersArray = audioData.characters;

    var audioArray = [];

/*    for(var key in keysData)
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
*/

    for(var i = 0; i < charactersArray.length; i++) {

      var character = charactersArray[i];

      for(var j = 0; j < audioData[character].length; j++) {

        var newAudio = (<audio
                          key={"key-" + character + j}
                          src={"/src/audio/" + character + "/" + audioData[character][j] + ".wav"}
                       />);

        audioArray.push(newAudio);

      }

    }

    return audioArray;

  }

  render() {
    return (
      <div>
      	{this.generateAudios()}
      </div>
    );
  }
}

export default Audio;
