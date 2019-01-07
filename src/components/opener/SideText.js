import React from 'react'
import './sideText.scss'
import { Trail, config } from 'react-spring';


export default function SideText() {
    const items = [
        <h3>Full-Stack Engineer</h3>,
        <h3>Specializing in React and Node.js</h3>,
        <h3>Looking for an internship</h3>,]
  return (
      <div className="sideText">
          <Trail
            config={config.molasses}
            items={items} keys={item => item.key}
            from={{ opacity: 0,  marginRight: -1000}}
            to={{ opacity: 1,  marginRight:0}}>
            {item => props =>
                <span style={props} >{item}</span>
            }
            </Trail>  
        </div>
  )
}
