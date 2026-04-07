import React from "react";
import heroimage from "../../images/heroimage.jpg";
import smallimage from "../../images/smallimage.jpg";

export default function Herosection() {
  return (
<section className="w-full py-20 lg:py-28"> {/* bigger section */}      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-xl">

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 uppercase bg-brand-gradient bg-clip-text text-transparent">
              VISGROW IS ON A MISSION
              <br />
              TO HELP STUDENTS To Land Their Dream Job
            </h1>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Struglling to find a professional job?
              Looking to imporve your skills?
              <br />
              <span className="font-medium text-gray-700">
                Acadamics | Career Coaching | Internship
              </span>
            </p>
           <div className="flex items-center gap-4">

  <button className="flex items-center gap-3 px-8 py-3.5 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition">
    Join Us Today
  </button>


</div>

          </div>


          {/* RIGHT IMAGE DESIGN */}
          <div className="flex-1 flex justify-center relative min-h-[380px]">

            {/* Orange background arc */}
            <div className="absolute w-[340px] h-[240px] bg-brand-orange opacity-60 rounded-[60%] rotate-12"></div>

            {/* MAIN CIRCLE */}
            <div className="relative z-20 w-[260px] h-[260px] rounded-full overflow-hidden border-[8px] border-brand-purple shadow-xl">
              <img
                src={heroimage}
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>

            {/* PURPLE DECORATION CIRCLE */}
            <div className="absolute top-[40px] right-[80px] w-[60px] h-[60px] rounded-full bg-brand-purple shadow-md"></div>

            {/* PINK DECORATION CIRCLE */}
            <div className="absolute bottom-[80px] left-[60px] w-[90px] h-[90px] rounded-full bg-brand-pink shadow-md"></div>

            {/* SMALL IMAGE CIRCLE */}
            <div className="absolute bottom-[20px] right-[30px] w-[120px] h-[120px] rounded-full overflow-hidden border-[6px] border-brand-pink shadow-lg">
              <img
                src={smallimage}
                alt="Teamwork"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
        </div>
      </div>
    </section>
  );
}