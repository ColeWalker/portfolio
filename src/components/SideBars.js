import React from 'react'
import './sidebar.scss'



//this is a reusable element for each parallax page
//pass in the id of the page, it will make whatever number the page is a different style

export default function SideBars({id}) {
    var blocks =[];
    for (var i=0; i<4; i++){
        blocks.push (<span className={id===i ? `selected`: `deselected`}></span>)
    }
  return (
    <div className="sidebarWrapper">
        {blocks}
    </div>
    
  )
}
