import Typography from "typography"

import Bootstrap from "typography-theme-bootstrap"

let linkColor = '#0B3C5D'
let unclickedLinkColor = '#00688B'

Bootstrap.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    'a:hover': {
      color: linkColor,
      textDecoration: 'underline'
    },
    a: {
      color: unclickedLinkColor,
      textDecoration: "none",},
  }
}

const typography = new Typography(Bootstrap)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
