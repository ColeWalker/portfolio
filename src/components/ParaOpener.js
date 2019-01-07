import React from 'react';
import './opener.scss';
import SideBars from './SideBars'
import SideText from './opener/SideText'
const ParaOpener = ()=> (
    <div className="bg">
        <span className="helloText">
            <h2>Hello,</h2>
            <h1>I'm Cole.</h1>
        </span>
        <SideBars id={0}/>
        <SideText />
        <div className="bottomText">
            <span className="contactText"><h2>Contact Me</h2></span>
            <span className="emailText"><h3>colegrwalker@gmail.com</h3></span>
        </div>
    </div>
)
export default ParaOpener;