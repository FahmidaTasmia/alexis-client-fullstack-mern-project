import React from 'react'
import useTitle from '../../hooks/UseTitle'
import Features from '../Portfolio/Features'
import Service from '../Service/Service'

import About from './About'
import Banner from './Banner'
import Brand from './Brand'

import Skill from './Skill'
import Slider from './Slider'
import Team from './Team'

import Testimonial from './Testimonial/Testimonial'
import Work from './Work'


function Home() {
 useTitle('Home')
  return (
    <div>
    
      <Slider></Slider>
      <Banner></Banner>
      <About></About>
      <Features></Features>
      <Service></Service>
      <Work></Work>
      <Brand></Brand>
      <Skill></Skill>
      <Testimonial></Testimonial>
      <Team></Team>
  
    
      
    
    </div>
  )
}

export default Home
