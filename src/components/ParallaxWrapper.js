import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import ParaOpener from '../components/ParaOpener'
import ProjectPage from '../components/projectpages/ProjectPage'
import { StaticQuery, graphql } from 'gatsby'


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
                    
                        <ParallaxLayer offset={0} speed={0} onClick={() =>this.parallax.scrollTo(1)}>
                            <ParaOpener />
                        </ParallaxLayer>
                        <ParallaxLayer offset={1} speed={0} onClick={() =>this.parallax.scrollTo(2)}>
                            <ProjectPage image={data.image} bgColor={"grey"} pageNumber={1}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={2} speed={0} onClick={() =>this.parallax.scrollTo(3)}>
                            <ProjectPage image={data.project2} bgColor={'red'} pageNumber={2}/>
                        </ParallaxLayer>
                    </Parallax>
                </React.Fragment>
            </div> ) }> 
        </StaticQuery> 
    </div>
    )
  }
}
