import React from 'react'
import '../scss/mobileSite.scss'

export default function AboutMe() {
  return (
    <div className="mobileBg">
      <div className="mobileWiring">
        <h1 className="mobileHeader"> About Me</h1>
        <div className="mobileContentWrapper">
              <p className="mobileText">
                  I am full-stack web developer based in Bergen County New Jersey,
                  currently a third-year student studying Computer Science at William Paterson University.
                  I am incredibly passionate about web development and design, and have been working vigorously towards
                  mastering the tools that modern web developers use. Some of my favorite technologies to work with are Gatsby,
                  React, and Node.js. 
              </p>
          </div>
        </div>
        
      </div>
  )
}
