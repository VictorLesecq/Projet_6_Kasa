import React from 'react'
import './HeroSection.scss'

function HeroSection(props) {
     return (
          <div
               className="HeroSection_Container"
               style={{ backgroundImage: `url(${props.url})` }}
          >
               {props.children ? props.children : <div></div>}
          </div>
     )
}

export default HeroSection
