import { useEffect, useState } from "react";


const destinations = [
  {
    name: "Moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: "/images/moon.png",
  },
  {
    name: "Mars",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: "/images/mars.png",
  },
  {
    name: "Europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    image: "/images/europa.png",
  },
  {
    name: "Titan",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    image: "/images/titan.png",
  },
];

export default function DestinationCarousel() {
  const [selected, setSelected] = useState("Moon");

  const current = destinations.find((d) => d.name === selected);

  return (

    //======== FETCHING API OF ALL COUNTRIES =============

    <div className="text-white text-center p-4">
      <h2 className="uppercase text-lg tracking-widest mb-4">Pick your destination</h2>

      {/* Tabs */}
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

      {/* Content */}
      <div className="flex flex-col items-center gap-6">
        <img src={current.image} alt={current.name} className="w-52 h-52 object-contain" />
        <h1 className="text-4xl uppercase">{current.name}</h1>
        <p className="max-w-md text-gray-300">{current.description}</p>

        <div className="flex gap-12 mt-4">
          <div>
            <p className="uppercase text-sm text-gray-400">Avg. Distance</p>
            <p className="text-lg">{current.distance}</p>
          </div>
          <div>
            <p className="uppercase text-sm text-gray-400">Est. Travel Time</p>
            <p className="text-lg">{current.travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}