import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import ParaOpener from '../components/ParaOpener'
import SEO from '../components/seo'
import ProjectPage from '../components/projectpages/ProjectPage'
import { StaticQuery, graphql } from 'gatsby'
const IndexPage = () => (
  <>
  <SEO title={"Cole Portfolio"} />
  <main>
  <StaticQuery query={graphql`
    {
  image: file (relativePath:{eq:"ppp2.PNG"}) {
    relativePath
    childImageSharp{
          fluid(maxWidth: 1920){
            srcSet
          }
         
          }
    }
 project2: file (relativePath:{eq:"coleblog.PNG"}) {
    relativePath
    childImageSharp{
          fluid(maxWidth: 1920){
        	srcSet   
      }}
}}
    ` } render ={(data) =>(
  <div>
    {console.log(data)}
    <Parallax pages ={5} scrolling={false} horizontal={false}>
      <ParallaxLayer offset={0} speed={0.5}>
        <ParaOpener />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <ProjectPage image={data.image}/>
      </ParallaxLayer>
    </Parallax>
    </div> ) }> 
    </StaticQuery> 
  </main>
  </>
)

export default IndexPage
