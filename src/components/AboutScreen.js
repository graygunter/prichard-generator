import React, { Component } from 'react';


class AboutScreen extends Component {


  render() {
    return (
      <div className="about-screen">

        <button 
                className="about-close"
                onClick={() => this.props.handleAboutClose()}>

                <div className="inner-text">
                  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i> back
                </div> 

        </button>

        <div className="inner-container">

          <h2>
              Well you know...
          </h2>

          <p>
            <span className="firstcharacter">H</span>ave you ever found yourself wanting more of the <a href="http://www.mlwradio.com/something-to-wrestle-with-bruce-prichard.html" target="_blank">Something to Wrestle with Bruce Prichard</a> podcast but it’s not noon on a Friday and the hands on the clock keep spinning too slow? Have you ever heard <a href="https://twitter.com/HeyHeyItsConrad" target="_blank">Conrad Thompson</a> ask <a href="https://twitter.com/bruceprichard" target="_blank">Bruce</a> a question and thought “I know exactly which catch phrase he’s going to respond with”? Well then you’re a nerd, but now with the power of <strong>Something to Generate Something to Wrestle with Bruce Prichard</strong> you’re a nerd who can do something about it, brother.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>

      </div>
    );
  }
}

export default AboutScreen;
