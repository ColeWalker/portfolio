import React from 'react'
import SEO from '../components/seo'
import '../components/scss/resume.scss'

export default function resume() {
  return (
    <div className={"resumeBg"}>
      <SEO title="About Me" />
      <main>
          <div className={"aboutMeWrapper"}>
            <h1 className={"myName"}>Cole Walker</h1>
            <div className={"resumeBody"}>
                <h2 className={"resumeSubTitle"}>Education</h2>
                <div className={"subTextWrapper"}>
                    <span className={"leftSubText"}>
                    <p>William Paterson University, Wayne, NJ </p>	
                    <p>Bachelor of Science in Computer Science</p>		
                    <p>Dean’s List, William Paterson University</p></span>
                    <span className={"rightSubText"}>
                        <p>May 2020</p>
                        <p>GPA: 3.5</p>
                        <p>Fall 2016 - Fall 2017, Fall 2018</p>
                    </span>
                </div>
                <h2 className={"resumeSubTitle"}>Technical Skills</h2>
                <span className={"resumeTechSkills"}>
                    <p><strong>Web Technologies:</strong> JQuery, React, Redux, Node.js, Express, Gatsby, REST, 
                    GraphQL, HTML5, CSS3, SASS</p>
                    <p><strong>Databases:</strong> MongoDB, MySQL, SQLite</p>
                    <p><strong>Programming Languages:</strong> C++, Java, Python, Javascript</p>
                    <p><strong>Design Software:</strong> Adobe Illustrator, Adobe XD, Adobe Photoshop</p>
                </span>
            <h2 className={"theProcessHeader"}>My Process</h2>
            <div className={"theProcess"}>
                <p>It all begins with the design. I begin by plotting the design of the website in excruciating detail using design software
                    such as Adobe XD and Adobe Illustrator. For inspiration, I typically view award winning websites of a similar nature to that
                    which I am designing. Emulating such sites results in beautiful designs such as the website which you are currently viewing.
                </p>
                <p>
                    After I have created a detailed mock-up, I decide what technologies I'll need in order to create the site. If I need an 
                    API of some sort, I will create that first, using the Express framework with Node.js to build a RESTful API to do whatever I need.
                    The beauty of Express is its incredible versatility, so if I need to change or add something later in the project, I can do so without worry.
                </p>
                <p>
                    After I have decided what technologies will be used to build the front-end, I start coding the website, page by page, while viewing the mock-up
                    and copying it. During this process, I play around with animations to make the site look more lively, potentially using animation libraries such
                    as React-Spring to my advantage. Additionally, I use a typical Agile method of coding and constant testing, so as to catch errors immediately. 
                </p>
                <p>
                    Finally, I will launch the site on a remote server to test for errors that might not appear on machine and fix them accordingly. After this, I have completed my project. 
                </p>
            </div>
            </div>            
          </div>
      </main>
    </div>
  )
}
