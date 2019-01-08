import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import ParaOpener from './opener/ParaOpener'
import ProjectPage from '../components/projectpages/ProjectPage'
import { StaticQuery, graphql } from 'gatsby'
import SideBars from './SideBars';
import AboutMe from './aboutme/AboutMe'

export default class ParallaxWrapper extends Component {
  render() {
    return (
      <div>
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
            `}
        render ={(data) =>(
            <div>
                <React.Fragment>
                    <Parallax pages ={4} scrolling={false} horizontal={false} ref={ref => this.parallax = ref}>
                        <ParallaxLayer offset={0} speed={0} >
                            <SideBars id={0} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
                            scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
                            <ParaOpener />
                        </ParallaxLayer>
                        <ParallaxLayer offset={1} speed={0}>
                            <SideBars id={1} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
                            scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
                            <ProjectPage image={data.image} bgColor={"#5E5E5E"} pageNumber={1} title={popPunkPunditTitle} content={popPunkPunditContent} contentURL={"https://www.poppunkpundit.com/"}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={2} speed={0}>
                            <SideBars id={2} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
                            scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
                            <ProjectPage image={data.project2} bgColor={'#083303'} pageNumber={2} title={coleBlogTitle} content={coleBlogContent} contentURL={"https://coleblog.me/"}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={3} speed={0}>
                            <SideBars id={3} scrollTo={()=>this.parallax.scrollTo(0)} scrollTo1={()=>this.parallax.scrollTo(1)} 
                            scrollTo2={()=>this.parallax.scrollTo(2)}  scrollTo3={()=>this.parallax.scrollTo(3)}/>
                            <AboutMe />
                        </ParallaxLayer>
                    </Parallax>
                </React.Fragment>
            </div> ) }> 
        </StaticQuery> 
    </div>
    )
  }
}

const popPunkPunditTitle= "Pop Punk Pundit"
const popPunkPunditContent= `A music blog created and designed by me. 
I first created the mock-up in Adobe XD and created the site logo in Illustrator. 
I then made use of technologies such as React.js, Node.js, Gatsby, styled-components, typography.js, and graphql to create a blazing-fast blog which was
simple to maintain and post to.`

const coleBlogTitle="Cole.Blog"
const coleBlogContent= `A development blog carefully designed and programmed by me. 
Using graphql queries in tandem with Gatsby, React, and styled-components, I was able to craft a beautiful and fast 
website which would the perfect environment for me to document my learnings as I progress through my development journey. 
`