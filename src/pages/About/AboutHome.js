import React from 'react'
import Brand from '../Home/Brand'
import Skill from '../Home/Skill'
import Team from '../Home/Team'
import Testimonial from '../Home/Testimonial/Testimonial'
import About from './About'

function AboutHome() {
  return (
    <div>
      <About></About>
      <Skill></Skill>
      <Testimonial></Testimonial>
      <Team></Team>
      <Brand></Brand>
    </div>
  )
}

export default AboutHome
