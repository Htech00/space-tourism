import React, { useEffect, useState } from 'react'
 

function TechnologyComponents() {
    const [data, setData] = useState([]); // holds your API data
    const [current, setCurrent] = useState(0); // current item index

   useEffect(() => {
        // fetch the data from your JSON file in public/
        fetch("/technology.json")
        .then((res) => res.json())
        .then((techData) => {
            setData(techData); // save the fetched data
        })
        
    }, []);

    // if data hasn’t loaded yet
    if (data.length === 0) return <p className="text-white">Loading...</p>;

    const tech = data[current]; // get the current item from the array
  return (
    <div className='flex flex-col sm:mx-auto sm:w-full w-[350px]  text-white items-start sm:p-6 ' >
      <h2 className="sm:text-[28px] uppercase sm:mt-[150px] mt-[100px] sm:ml-[100px] ml-[50px] ">03 Space Launch 101</h2>

      <div className="flex sm:flex-row flex-col sm:w-full w-[300px]  sm:mt-0 mt-[20px] sm:items-center sm:ml-0 ml-auto items-start sm:gap-10 gap-6">
        {/* Buttons */}
        <div className="flex sm:flex-col gap-4 sm:ml-[100px]  ">
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
        <div className=" text-left sm:w-[400px] w-[300px] ml-[10px] sm:ml-[30px]">
          <h4 className="text-[16px]  text-gray-400 mb-2">The terminology…</h4>
          <h1 className="sm:text-[46px] uppercase mb-4">{tech.name}</h1>
          <p className="text-[#D0D6F9] sm:text-[18px] text-[10px]">{tech.description}</p>
        </div>

        {/* Image */}
        <div>
          <img src={tech.image} alt={tech.name} className="sm:w-[350px] sm:h-[351px] w-[300px] h-[210px]" />
        </div>
      </div>

    </div>
   

  )
}

export default TechnologyComponents