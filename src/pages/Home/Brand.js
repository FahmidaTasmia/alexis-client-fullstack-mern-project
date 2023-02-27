import React from 'react'
import brand1 from '../../asset/download1.png'
import brand2 from '../../asset/download2.png'
import brand3 from '../../asset/download3.png'
import brand4 from '../../asset/download4.png'
import brand5 from '../../asset/download5.png'
import brand6 from '../../asset/download6.png'
import brand7 from '../../asset/download7.png'
import brand8 from '../../asset/download8.png'
import home from '../../asset/homesc.png'

function Brand() {
  return (
    <div className='bg-black p-32' style={{backgroundImage:(`url(${home})`)}}>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
            <div><img src={brand1} alt="" /></div>
            <div><img src={brand2} alt="" /></div>
            <div><img src={brand3} alt="" /></div>
            <div><img src={brand4} alt="" /></div>
            <div><img src={brand5} alt="" /></div>
            <div><img src={brand6} alt="" /></div>
            <div><img src={brand7} alt="" /></div>
            <div><img src={brand8} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Brand
