import React from 'react'
import ParallaxWrapper from '../components/ParallaxWrapper'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
  <SEO title={"Cole Portfolio"} />
  <div className={"desktopContainer"}>
    <ParallaxWrapper />
  </div>
  </>
)

export default IndexPage
