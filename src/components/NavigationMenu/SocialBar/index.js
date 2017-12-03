import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import TwitterIcon from './icons/twitter.svg'
import GitHubIcon from './icons/github.svg'
import MediumIcon from './icons/medium.svg'
import SteemitIcon from './icons/steemit.svg'
import LinkedInIcon from './icons/linkedin.svg'

const iconStyles = css({
  width: 20,
  height: 20,
  border: 'none',
  outline: 'none',
  transition: 'all 0.4s ease-in-out',
  // make all icons black
  filter: 'brightness(0%)',
  ':hover': {
    // opacity: 0.5,
    filter: 'none',
    cursor: 'pointer',
    transform: 'scale(1.1)',
  },
})

const listStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  padding: 0,
  listStyleType: 'none',
  margin: '1rem 0',
})

const Icon = ({ icon, url }) => (
  <a className="no-style" rel="noopener noreferrer" target="__blank" href={url}>
    <img src={icon} {...iconStyles} />
  </a>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default class SocialBar extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          twitter: PropTypes.string,
          github: PropTypes.string,
          medium: PropTypes.string,
          steem: PropTypes.string,
          linkedIn: PropTypes.string,
        }),
      }),
    }).isRequired,
  }
  render() {
    const { data } = this.props
    return (
      <ul {...listStyle}>
        <li>
          <Icon
            url={`//twitter.com/${data.site.siteMetadata.twitter}`}
            icon={TwitterIcon}
          />
        </li>
        <li>
          <Icon
            url={`//github.com/${data.site.siteMetadata.github}`}
            icon={GitHubIcon}
          />
        </li>
        <li>
          <Icon
            url={`//medium.com/@${data.site.siteMetadata.medium}`}
            icon={MediumIcon}
          />
        </li>
        <li>
          <Icon
            url={`//steemit.com/@${data.site.siteMetadata.steem}`}
            icon={SteemitIcon}
          />
        </li>
        <li>
          <Icon
            url={`//linkedin.com/in/${data.site.siteMetadata.linkedIn}`}
            icon={LinkedInIcon}
          />
        </li>
      </ul>
    )
  }
}

export const SocialBarQuery = graphql`
  fragment socialMedia on RootQueryType {
    site {
      siteMetadata {
        twitter
        github
        medium
        steem
        linkedIn
      }
    }
  }
`