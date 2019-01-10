import React from 'react'
import ParallaxWrapper from '../components/ParallaxWrapper'
import SEO from '../components/seo'
import MobileSite from '../components/mobilesite/MobileSite'
import '../components/scss/mobileOrDesktop.scss'

const IndexPage = () => (
  <>
  <SEO title={"Cole Portfolio"} />
  <div className={"desktopContainer"}>
    <ParallaxWrapper />
  </div>
  <div className={"mobileContainer"}>
    <MobileSite> </MobileSite>
  </div>
  </>
)

export default IndexPage
