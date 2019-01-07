import React from 'react'
import './scss/sidebar.scss'



//this is a reusable element for each parallax page
//pass in the id of the page, it will make whatever number the page is a different style

export default function SideBars({id, scrollTo, scrollTo1, scrollTo2, scrollTo3 }) {
    var blocks =[];
    var moveTo= [scrollTo, scrollTo1, scrollTo2, scrollTo3];
    for (var i=0; i<4; i++){
        blocks.push (<span className={id===i ? `selected`: `deselected`} onClick={moveTo[i]}></span>)
    }
    
  return (
    <div className="sidebarWrapper">
        {blocks}
    </div>
    
  )
}
