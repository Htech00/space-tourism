import React from 'react'

function Space() {
  return (
    <div className="flex sm:flex-row flex-col sm:mt-auto mt-[150px] gap-[80px] items-center mx-auto  sm:gap-[200px] sm:text-start sm:items-end sm:w-[900px] w-[375px]">
        <div className="sm:w-[450px] w-[350px]  sm:h-[382px] text-white leading-[1]">
          <h3 className="sm:text-[28px] text-[18px] font-normal">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="sm:text-[120px] text-[60px] font-normal pb-[40px] space">SPACE</h1>
          <p className="sm:text-[18px]  text-[12px] font-normal leading-[16px] sm:leading-[32px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="sm:w-[274px] sm:h-[274px] mx-auto   w-[200px] h-[200px] space rounded-full flex items-center justify-center bg-white">
          <p className="text-black text-[32px]">EXPLORE</p>
        </div>
      </div>
  )
}

export default Space