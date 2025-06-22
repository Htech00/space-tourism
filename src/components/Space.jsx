import React from 'react'

function Space() {
  return (
    <div className="flex gap-[386px] text-start items-end mx-auto">
        <div className="w-[450px] h-[382px] text-white leading-[1]">
          <h3 className="text-[28px] font-normal">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="text-[120px] font-normal pb-[40px] space">SPACE</h1>
          <p className="text-[18px] font-normal leading-[32px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-[274px] h-[274px] space rounded-full flex items-center justify-center bg-white">
          <p className="text-black text-[32px]">EXPLORE</p>
        </div>
      </div>
  )
}

export default Space