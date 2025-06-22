import React, { useEffect, useState } from 'react'
 

function TechnologyComponents() {
    const [data, setData] = useState([]); // holds your API data
    const [current, setCurrent] = useState(0); // current item index

   useEffect(() => {
        // fetch the data from your JSON file in public/
        fetch("/public/technology.json")
        .then((res) => res.json())
        .then((techData) => {
            setData(techData); // save the fetched data
        })
        
    }, []);

    // if data hasn’t loaded yet
    if (data.length === 0) return <p className="text-white">Loading...</p>;

    const tech = data[current]; // get the current item from the array
  return (
    <div className='mx-auto gap-30 text-white items-start p-6 ' >
      <h2 className="text-[28px] uppercase mt-[170px] ml-[100px] ">03 Space Launch 101</h2>

      <div className="flex  items-center gap-10 ">
        {/* Buttons */}
        <div className="flex flex-col gap-4 ml-[100px]">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-10 h-10 rounded-full font-bold text-lg border ${
                index === current ? "bg-white text-black" : "text-white border-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Info */}
        <div className=" text-left w-[400px] ml-[30px]">
          <h4 className="text-[16px]  text-gray-400 mb-2">The terminology…</h4>
          <h1 className="text-[46px] uppercase mb-4">{tech.name}</h1>
          <p className="text-[#D0D6F9] text-[18px]">{tech.description}</p>
        </div>

        {/* Image */}
        <div>
          <img src={tech.image} alt={tech.name} className="w-[420px] h-[451px]" />
        </div>
      </div>

    </div>
   

  )
}

export default TechnologyComponents