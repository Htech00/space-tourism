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
    <div className="text-white text-start items-start flex flex-col gap-[50px]  mt-[120px]">
      <h4 className="text-[28px] font-normal">
        <span className="opacity-[25%]">02 </span>MEET YOUR CREW
      </h4>
      <div className='flex'>
        <div className="flex flex-col gap-5">
        <h3 className="text-[32px] font-normal opacity-[50.42%]">{current.role}</h3>
        <h2 className="pb-3 text-[56px] font-normal">{current.name}</h2>
        <p className="text-[18px] font-normal text-[#D0D6F9] pr-70">
          {current.bio}
        </p>
        {/* Dots Navigation */}
          <div className="flex gap-3 mt-4">
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
          <img src={current.image} alt={current.image} className="h-[310px] w-[300px]"/>
      </div>
      
         

    </div>
  );
};

export default CrewComponents;