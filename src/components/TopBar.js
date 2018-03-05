import React, { Component } from 'react';

class TopBar extends Component {

  showAboutButton() {

    return (

      <button 
              className="about-button"
              onClick={() => this.props.handleAboutPress()}>

              <div className="inner-text">
                <i className="fa fa-question-circle" aria-hidden="true"></i> about
              </div> 

      </button>

    );

  }

  showAboutTitle() {

    return (

      <h2>Well you know...</h2>

    );

  }

  showBackButton() {

    return (

      <button 
              className="back-button"
              onClick={() => this.props.handleBackClick()}>

              <div className="inner-text">
                <i className="fa fa-chevron-circle-left" aria-hidden="true"></i> back
              </div> 

      </button>

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
            <h4>Category: <span>{this.props.exploreTitle}</span></h4>
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


        {this.props.isExplorePage ? this.showExploreInfo() : null}

        {this.props.isAboutPage ? this.showAboutTitle() : null}

        {this.props.isLandingPage ? this.showAboutButton() : this.showBackButton()}

      </div>
    
    );

  }

}

export default TopBar;