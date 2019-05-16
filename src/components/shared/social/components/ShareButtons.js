import React from 'react'
import PropTypes from 'prop-types'
import "../styles/ShareButtons.sass"
import {
  createTwitterDiscussionURL,
  createTwitterShareURL
} from '../../../../utils/social'
import config from '../../../../../gatsby-config'

import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from 'react-share';

class ShareButtons extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  render () {
    const shareUrl = createTwitterShareURL();
    const discussionUrl = createTwitterDiscussionURL();

    return (
      <div className="share-buttons">
        <h3>Share the love</h3>
        <FacebookShareButton 
          className="share-button" 
          quote={"Should I Use TypeScript @ shouldiusetypescript.com"} 
          url={config.siteMetadata.url}>Share to Facebook
        </FacebookShareButton>
        <a className="share-button twitter-button" href={shareUrl} target="_blank">Share on Twitter</a>
        <a className="share-button twitter-button" href={discussionUrl} target="_blank">Discussion on Twitter</a>

        <br/>
        <a className="community-link" href="https://www.facebook.com/groups/855194701482543/">Join the TypeScript Community</a>
        <p>Share articles, experiences and discussions about professional JS and TypeScript.</p>
      </div>
    )
  }
}

export default ShareButtons;

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired
}