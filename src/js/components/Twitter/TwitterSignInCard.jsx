import React, { Component } from 'react';
import { renderLog } from '../../utils/logging';
import InfoCircleIcon from '../Widgets/InfoCircleIcon';
import TwitterSignIn from './TwitterSignIn';

const twitterText = 'Signing into Twitter is the fastest way to find voter guides related to your values. We Vote will find the voter guides of everyone you are following on Twitter.';

const twitterInfoText = (
  <span className="social-btn-description">
    <InfoCircleIcon />
    {twitterText}
  </span>
);

class TwitterSignInCard extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    renderLog('TwitterSignInCard');  // Set LOG_RENDER_EVENTS to log all renders
    return (
      <div className="card">
        <div className="card-main">
          <div className="network-btn">
            <TwitterSignIn
              buttonText="Find Public Opinions"
              id="signInToFindVoterGuides"
            />
            {twitterInfoText}
          </div>
        </div>
      </div>
    );
  }
}

export default TwitterSignInCard;
