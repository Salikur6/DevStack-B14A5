import { use, useState, type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { TechTypes } from "../TechType";
import { toast } from "react-toastify";

interface TechDataProps {
  data: Promise<TechTypes[]>;
  stack: TechTypes[];
  setStack: Dispatch<SetStateAction<TechTypes[]>>
}

const Tech = ({
  data,
  stack,
  setStack
  
}: TechDataProps) => {
  const reactData = use(data);


  const handleAddtoStackbtn = (stackData: TechTypes) => {
    // console.log("clicked on", stackData);

   const exitingStackData = stack.some(s => s.id === stackData.id);

    if(exitingStackData){
      return toast('Already Added')
    }
    setStack([...stack, stackData])
    toast(`${stackData.name}  Added to you Stack`)
  };



  return (
    <div className="col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-9  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
      {/* Cards and Stacks ---------- */}

      {reactData.map((tech: TechTypes) => {

        const exitingData = stack.some(s=> s.id ===tech.id); 
        
        return (
          <div key={tech.id}>
            <div className="border border-[#334155] p-5 rounded-2xl h-full flex flex-col">
              <div className="flex justify-between mb-3">
                <img src={tech.icon} width={"40px"} height={"40px"} alt="" />
                <p className="text-[#0EA5E9] text-xs bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                  {tech.badge}
                </p>
              </div>

              <h3 className="text-xl font-bold font-jakarta mb-3">
                {tech.name}
              </h3>
              <p className="text-[#64748B] text-justify flex-1">
                {tech.description}
              </p>

              <div className="divider mb-3"></div>
              <div className="flex justify-between items-center">
                <p className="text-[#475569] text-[10px] font-bold bg-[#f1f5f9cc] rounded px-3 inline py-1">
                  {tech.category}
                </p>
                <p className="text-[#64748B] text-[10px] font-medium">
                  {tech.difficulty}
                </p>
                <p className="text-[#334155] font-semibold text-xs flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {tech.rating}
                </p>
              </div>

              <button
                onClick={() => handleAddtoStackbtn(tech)}
                disabled={exitingData}
                className={`mt-4  w-full font-medium rounded-xl py-2
    ${
      exitingData
        ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
        : "bg-black text-white cursor-pointer"
    }`}      >
      {exitingData ? '✓ Added to Stack' : 'Add to Stack'}
                
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
