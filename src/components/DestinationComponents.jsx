import React, { useState } from 'react';

const destinations = [
  {
    name: "Moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: "/images/Moon.png",
  },
  {
    name: "Mars",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: "/images/Mars.png",
  },
  {
    name: "Europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    image: "/images/Europa.png",
  },
  {
    name: "Titan",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    image: "/images/Titan.png",
  },
];


function DestinationComponents() {
     const [selected, setSelected] = useState("Moon");
    
      const current = destinations.find((d) => d.name === selected);
  return (
    <div className=' mt-[210px] mx-auto gap-30 text-white  w-[900px] items-start '>
        <div className='flex gap-1'>
            <p className='font-[700] text-[28px] text-[#FFFFFF]/9 leading-[100%]'>01</p>
            <h2 className='font-[400] text-[28px] leading-[100%]'>Pick Your Destination</h2>
        </div>
        <div className='flex items-center gap-30 mt-[50px] w-[440x] justify-center'>
            <img src={current.image} alt={current.name} className='w-86 h-86'  />
            <div className='flex flex-col w-[300px] gap-3'>
                <div className="flex justify-center gap-6 mb-6">
                    {destinations.map((d) => (
                    <button
                        key={d.name}
                        onClick={() => setSelected(d.name)}
                        className={`uppercase tracking-widest ${
                        selected === d.name ? "border-b-2 border-white" : "text-gray-400"
                        } pb-2 transition`}
                    >
                        {d.name}
                    </button>
                    ))}
                </div>
                <div className='flex flex-col justify-center  w-[300px] gap-3  '>
                    <h1 className='font-[400] text-[70px] leading-[100%] space text-start'>{current.name}</h1>
                    <p className='font-[400] text-[12px] leading-[20px] text-start pr-[10px] text-[#D0D6F9]'>{current.description}</p>
                </div>
                <div className='w-[300px] h-[1px] bg-[#383B4B] mt-[20px]'></div>
                <div className="flex gap-12 mt-4">
                <div>
                    <p className="uppercase text-sm text-gray-400">Avg. Distance</p>
                    <p className="text-lg space">{current.distance}</p>
                </div>
                <div>
                    <p className="uppercase text-sm text-gray-400">Est. Travel Time</p>
                    <p className="text-lg space">{current.travelTime}</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DestinationComponents