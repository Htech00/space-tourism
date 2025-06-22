import React, { useState } from 'react';

const crewData = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
    image: "/images/Douglas-crew.png",
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder of Canonical, the company behind Ubuntu.",
    image: "/images/Mark-crew.png",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.",
    image: "/images/Victor-crew.png",
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is the first self-funded woman to fly to the ISS and the first Iranian in space.",
    image: "/images/Anousheh-crew.png",
  },
];


function CrewComponents() {
  const [selected, setSelected] = useState("Douglas Hurley");

  const current = crewData.find((member) => member.name === selected);

  return (
    <div className="text-white text-start sm:items-start flex flex-col sm:gap-[50px] sm:w-[900px] w-[350px] sm:mt-[120px]">
      <h4 className="sm:text-[28px] text-[18px] font-normal">
        <span className="opacity-[25%]">02 </span>MEET YOUR CREW
      </h4>
      <div className='flex sm:flex-row flex-col items-start sm:mt-0 mt-5  sm:w-[900px]  w-[300px] '>
        <div className="flex flex-col gap-5 items-start">
        <h3 className="sm:text-[32px] text-[16px] font-normal opacity-[50.42%]">{current.role}</h3>
        <h2 className="pb-3 sm:text-[56px] text-[20px] font-normal">{current.name}</h2>
        <p className="text-[18px] font-normal text-[#D0D6F9] sm:pr-70 ">
          {current.bio}
        </p>
        {/* Dots Navigation */}
          <div className="space-x-3 mt-4 hidden sm:block  ">
            {crewData.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelected(c.name)}
                className={`w-3 h-3 rounded-full ${
                  selected === c.name ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
      </div>
        <img src={current.image} alt={current.image} className="sm:h-[310px] sm:mt-0 mt-10 sm:w-[300px] h-[200px] w-[200px]"/>
          
      </div>
      
      {/* Dots Navigation */}
          <div className="flex gap-5 mt-10 sm:hidden">
            {crewData.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelected(c.name)}
                className={`w-3 h-3 rounded-full ${
                  selected === c.name ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
    </div>
  );
};

export default CrewComponents;