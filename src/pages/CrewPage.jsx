import React from 'react'
import CrewComponents from '../components/CrewComponents'

function CrewPage() {
  return (
    <div className="crew pb-[100px] flex sm:flex-row flex-col  sm:relative sm:w-full w-full">
      <div className="flex sm:items-center mx-auto sm:mt-[212px] mt-[120px] sm:gap-[60px] sm:pl-[165px] sm:pr-[157px] sm:w-[900px] w-[250px] ">
        <CrewComponents />
        
      </div>
    </div>
  )
}

export default CrewPage