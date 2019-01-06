import React from 'react';
import './opener.scss';
import SideBars from './SideBars'
import SideText from './SideText'
const ParaOpener = ()=> (
    <div className="bg">
        <span className="helloText">
            <h2>Hello,</h2>
            <h1>I'm Cole.</h1>
        </span>
        <SideBars id={0}/>
        <SideText />
    </div>
)
export default ParaOpener;