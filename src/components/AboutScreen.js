import React, { Component } from 'react';


class AboutScreen extends Component {

  render() {
    return (
      <div className="about-screen">

        <button 
                className="back-button"
                onClick={() => this.props.handleBackClick()}>

                <div className="inner-text">
                  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i> back
                </div> 

        </button>

        <div className="inner-container">

          <h2>
              Well you know...
          </h2>

          <p>
            <span className="firstcharacter">H</span>ave you ever found yourself wanting more of the <a href="http://www.mlwradio.com/something-to-wrestle-with-bruce-prichard.html" target="_blank">Something to Wrestle with Bruce Prichard</a> podcast, but it’s not noon on a Friday and the hands on the clock keep spinning too slow? Have you ever heard <a href="https://twitter.com/HeyHeyItsConrad" target="_blank">Conrad Thompson</a> ask <a href="https://twitter.com/bruceprichard" target="_blank">Bruce</a> a question and thought “I know exactly which catch phrase or impression he’s going to respond with”? 
          </p>
          <p>
            If you answered 'yes' to any of the above you're a huge mark, but now with the power of <strong>Something to Generate Something to Wrestle with Bruce Prichard</strong> you’re a mark who can do something about it, brother.
          </p>

          <h2>
            Huhhh?
          </h2>

          <ul className="about-instructions">

            <li className="random-button">
              <img 
                    alt="Random button"
                    src={require(`../imgs/instructions/random_button.gif`)} />

              <p>
                Click the <strong>random button</strong> on any of the <strong>{this.props.numCategories} categories</strong> to hear a random audio clip from that category. {/* In this example we're about to play a random audio clip from the category <strong>Vince</strong>. But the fun doesn’t stop there...*/}
              </p>
            </li>

            <li className="explore-button">
              <img 
                    alt="Explore button"
                    src={require(`../imgs/instructions/explore_button.gif`)} />

              <p>
                Click the <strong>explore button</strong> on a category to view every single audio clip associated with the category. {/* In this example we're about to explore the category <strong>Baby Tonight</strong> */}
              </p>
            </li>

            <li className="explore-screen">
              <img 
                    alt="Explore screen"
                    src={require(`../imgs/instructions/explore_screen.gif`)} />

              <p>
                Clicking the <strong>explore button</strong> brings up the <strong>explore screen</strong> a listing of every audio clip in a category. Scroll to the bottom of the page to see them all. {/* In this example we're scrolling through the category <strong>Conrad</strong>*/}.
              </p>
            </li>

            <li className="audio-clip">
              <img 
                    alt="Audio clip"
                    src={require(`../imgs/instructions/audio_clip.gif`)} />

              <p>
                Each <strong>audio clip</strong> is represented by a rectangle. The large text in the top left is the <strong>title</strong>. The blue <strong>play button</strong> plays the audio clip. The green <strong>add button</strong> will add that audio clip to the <strong>playlist</strong>. In the bottom left are <strong>tags</strong> associated with the audio clip separated by #. {/* In this example we’re looking at the audio clip <strong>rolltide10</strong> which is tagged “#roll tide”, “#on that” and “#indeed”.*/}
              </p>
            </li>

            <li className="playlist">
              <img 
                    alt="Playlist"
                    src={require(`../imgs/instructions/sound_queue.gif`)} />

              <p>
                The <strong>playlist</strong> holds all of the audio clips for the episode of Something to Wrestle you’re building. Pressing the <strong>play buttons</strong> will play the audio files in order from top to button. Pressing the <strong>reset button</strong> removes all audio clips from the playlist. You can remove individual audio clips from the queue by pressing the <strong>red X button</strong> beside each audio clip in the playlist.
              </p>
            </li>

            <li className="filter">
              <img 
                    alt="Filter"
                    src={require(`../imgs/instructions/filter.gif`)} />

              <p>
                You can filter which audio clips appear by their tags. Click the <strong>filter by tag</strong> input and start typing. {/* In this example we're in the category Bruce and filtering out any audio files that don't have the tag <strong>drugs</strong>.*/}
              </p>
            </li>

          </ul>

          <h2>
            Who wrote this shit?
          </h2>

          <div className="author-photo">
            
            <img 
                  alt="Gray Gunter"
                  src={require(`../imgs/graybear_square.png`)} />
            <p>
              <span>Last known photo</span>
              <span>of author</span>
            </p>

          </div>

          <p>
            STGSTW was created by <a href="http://twitter.com/graygunter" target="_blank">Gray Gunter</a> a web designer and developer in Columbia, SC who loves wrasslin and Something to Wrestle. You can see other professional projects Gray has worked on at <a href="http://graybearllc.com/work.html" target="_blank">Graybear LLC</a> and his personal projects at <a href="http://graygunter.com" target="_blank">Gray Gunter dot com</a>.
          </p>

          <h2>
            Chat me up about...
          </h2>

          <p>
            STGSTW is a <a href="https://reactjs.org/" target="_blank">ReactJS</a> application, powered by <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> and styled by <a href="https://sass-lang.com/" target="_blank">SASS</a>. Development began in May 2017. The project is available publicly on <a href="https://github.com/graygunter/prichard-generator" target="_blank">Github</a>.
          </p>

          <div className="logos">

            <img 
                  alt="ReactJS"
                  className="react"
                  src={require(`../imgs/logos/reactjs.png`)} />

            <img 
                  alt="SASS"
                  className="sass"
                  src={require(`../imgs/logos/sass.svg`)} />

            <img 
                  alt="NodeJS"
                  className="node"
                  src={require(`../imgs/logos/nodejs.png`)} />

          </div>

        </div>

      </div>
    );
  }
}

export default AboutScreen;
