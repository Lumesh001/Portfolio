import React from 'react'
import HomeComponentContent from './HomeComponentContent'

function HomeComponent() {
  return (
    <div className='relative flex flex-col h-full w-full left-0 z-[1] object-cover'>
        <HomeComponentContent/>
    </div>
  )
}

export default HomeComponent