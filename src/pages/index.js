import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import ParaOpener from '../components/ParaOpener'

const IndexPage = () => (
  <div>
    <Parallax pages ={5} scrolling={false} horizontal={false}>
      <ParallaxLayer offset={0} speed={0.5}>
        <ParaOpener />
      </ParallaxLayer>
    </Parallax>
  </div>
)

export default IndexPage
