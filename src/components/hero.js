import React from "React"
import Image from './Image'

{/*const Hero = ({ children }) => (
  <div
    style={{
      padding: `1rem`,
      width: `100%`,
      backgroundColor: `#555`,
      textAlign: `center`
    }}
  >
    {children}

    <p style={{marginBottom: 0}}>hello</p>    
  </div>
  )*/}

const Hero = ({backgroundImage}) => (
  <div>
    <Image
      background
      src={backgroundImage}
      size="cover"
    />
  </div>
)

export default Hero
