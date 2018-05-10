import React, { Component } from 'react';

class TopBar extends Component {

  showEmailSignup() {

    return (

      <div id="mc_embed_signup">
        <form action="https://stgstw.us18.list-manage.com/subscribe/post?u=95259661da78d19ab121ef327&amp;id=25d6ca627c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              Stay updated on the world of Something To Wrestle
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL"></label>
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>
                <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
                  <input type="text" name="b_95259661da78d19ab121ef327_25d6ca627c" tabIndex="-1" value="" />
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                </div>
            </div>
        </form>
      </div>

    );

  }

  showAboutButton() {

    return (

      <div className="buttons-container">

        <button 
                className="about-button"
                onClick={() => this.props.handleAboutPress()}>

                <div className="inner-text">
                  <i className="fa fa-question-circle" aria-hidden="true"></i> about
                </div> 

        </button>

        <button
                className="show-instructions"
                onClick={() => this.props.handleInstructionsHide()}>
                  <div className="inner-text">
                    {this.props.instructionsHide ? "show instructions" : "hide instructions"}
                  </div>
        </button>

      </div>

    );

  }

  showBackButton() {

    return (

      <div className="buttons-container">

        <button 
                className="back-button"
                onClick={() => this.props.handleBackClick()}>

                <div className="inner-text">
                  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i> back
                </div> 

        </button>

      </div>

    );

  }

  showExploreInfo() {

    return (

      <div className="explore-info">

        <div 
              className="icon"
              style={{backgroundImage: this.props.iconPath}}>    
        </div>

        <div className="text-and-inputs">

          <div className="category-and-clips">
            <h4><span>{this.props.exploreTitle}</span></h4>
            <h4><span>{this.props.numberOfClips}</span> {this.props.audioClipsString}</h4>
          </div>

          <input  type="text"
                  onBlur={this.props.onBlur}
                  onChange={this.props.onChangeHandler}
                  onFocus={this.props.onFocus}
                  value={this.props.filterInput} />

        </div>

      </div>

		);

	}

  render() {

    return (

      <div className="top-bar">

        <h1 className="title">
          Something to Generate
          Something to Wrestle with
          Bruce Prichard
        </h1>


        {this.props.isExplorePage ? this.showExploreInfo() : this.showEmailSignup()}

        {this.props.isLandingPage ? this.showAboutButton() : this.showBackButton()}

      </div>
    
    );

  }

}

export default TopBar;