import React from 'react';
import '../scss/opener.scss';
import SideText from './SideText'
const ParaOpener = ()=> (
    <div className="bg">
        <span className="helloText">
            <h2>Hello,</h2>
            <h1>I'm Cole.</h1>
        </span>
        
        <SideText />
        <div className="bottomText">
            <span className="contactText"><h2>Contact Me</h2></span>
            <span className="emailText"><h3>colegrwalker@gmail.com</h3></span>
        </div>
    </div>
)
export default ParaOpener;