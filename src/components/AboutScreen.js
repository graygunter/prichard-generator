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
            <span className="firstcharacter">H</span>ave you ever found yourself wanting more of the <a href="http://www.mlwradio.com/something-to-wrestle-with-bruce-prichard.html" target="_blank">Something to Wrestle with Bruce Prichard</a> podcast, but it’s not noon on a Friday and the hands on the clock keep spinning too slow? Have you ever heard <a href="https://twitter.com/HeyHeyItsConrad" target="_blank">Conrad Thompson</a> ask <a href="https://twitter.com/bruceprichard" target="_blank">Bruce</a> a question and thought “I know exactly which catch phrase he’s going to respond with”? Well then you’re a nerd, but now with the power of <strong>Something to Generate Something to Wrestle with Bruce Prichard</strong> you’re a nerd who can do something about it, brother.
          </p>

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

        </div>

      </div>
    );
  }
}

export default AboutScreen;
