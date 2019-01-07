import React from 'react'
import SideBars from '../SideBars'
import './projectPage.scss'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'

export default function ProjectPage({data, title, content, contentURL, image, bgColor }) {
  return (
  
    
    <div className="projectPageBg" style={{backgroundColor: bgColor}}>
      <SideBars id={1}/>
      <div className={"projectPageWiring"}>
            <div className={"projectContentContainer"}>
                <h1 className="projectTitle">{title}</h1>
                <div className={"coloredBar"}></div>
                <p className={"contentText"}>
                    {content}
                    {console.log(image)}
                </p>
                <button className="linkToSite"> Click Here! </button>
                
            </div>
      </div>
      <Img fluid={image.childImageSharp.fluid} className={"sideImage"}/>
    </div>

  )
}

export const query = graphql`
  query ImageQuery{
    file(relativePath: { eq: "poppunkpundit.PNG" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`