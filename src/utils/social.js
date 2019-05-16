
import config from '../../gatsby-config'

export const createTwitterShareURL = () => {
  return `http://twitter.com/share?text=${"Should I Use TypeScript?"}&url=${config.siteMetadata.url}/&via=stemmlerjs`
}

export const createTwitterDiscussionURL = () => {
  return `https://twitter.com/search?q=${config.siteMetadata.url}`
}