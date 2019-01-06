import React from 'react'
import './sidebar.scss'

var blocks =[];

//this is a reusable element for each parallax page
//pass in the id of the page, it will make whatever number the page is a different style

export default function SideBars({id}) {
    for (var i=0; i<5; i++){
        blocks.push (<span className={id===i ? `selected`: `deselected`}></span>)
    }
  return (
    <div className="sidebarWrapper">
        {blocks}
    </div>
  )
}
