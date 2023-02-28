import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='flex justify-center my-52'>
      <InfinitySpin
  width='200'
  color="#c5a47e"
/>
    </div>
  )
}

export default Loader
