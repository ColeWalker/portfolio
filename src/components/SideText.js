import React from 'react'
import './sideText.scss'
import { Trail } from 'react-spring';


export default function SideText() {
    const items = [
        <h3> Full-Stack Engineer</h3>,
        <h3>Specializing in React and Node.js</h3>,
        <h3>Looking for an internship</h3>,]
  return (
      <div className="sideText">
          <Trail
            items={items} keys={item => item.key}
            from={{ transform: 'translate3d(0,-40px,0)' }}
            to={{ transform: 'translate3d(0,0px,0)' }}>
            {item => props =>
                <span style={props}>{item}</span>
            }
            </Trail> 
        </div>
    
  )
}
