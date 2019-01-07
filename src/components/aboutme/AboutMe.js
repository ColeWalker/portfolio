import React from 'react'
import '../scss/aboutMe.scss'


export default function AboutMe() {
  return (
    <div className="aboutMeBg">
      <div className="aboutMeWiring">
        <h1 className="aboutMeHeader"> About Me</h1>
        <div className="contentWrapper">
            <div className="leftColoredBar"></div>
            
            <p className="aboutMeText">
            I am full-stack web developer based in Bergen County New Jersey,
            currently a third-year student studying Computer Science at William Paterson University.
            I am incredibly passionate about web development and design, and have been working vigorously towards
            mastering the tools that modern web developers use. Some of my favorite technologies to work with are Gatsby,
            React, and Node.js. 
            </p>
            <div className="rightColoredBar"></div>
        </div>
      </div>
    </div>
  )
}
