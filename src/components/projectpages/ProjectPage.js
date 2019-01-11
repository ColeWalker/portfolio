import React from 'react'
import '../scss/projectPage.scss'
import Img from 'gatsby-image'

export default function ProjectPage({title, content, contentURL, image, bgColor}) {
  return (   
    <div className="projectPageBg" style={{backgroundColor: bgColor}}>
      <div className={"projectPageWiring"}>
            <div className={"projectContentContainer"}>
                <h1 className="projectTitle">{title}</h1>
                <div className={"coloredBar"}></div>
                <p className={"contentText"}>
                    {content}
                </p>
                <span class="buttonWrapper">
                  <a href={contentURL}><button className="linkToSite"> Live Site </button></a>
                </span> 
            </div>
            
      </div>  
      <Img fluid={image.childImageSharp.fluid} className={"sideImage"} />
    </div>
  )
}
