import { Suspense, useState } from "react";
import Tech from "./Tech";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import type { TechTypes } from "../TechType";
import { DiVim } from "react-icons/di";
import { CiSquareRemove } from "react-icons/ci";

const dataPromise = async (): Promise<TechTypes[]> => {
  const res = await fetch("/data.json");
  if(!res.ok){
    throw new Error('Data Fetch failed')
  }
  const data:TechTypes[] =await res.json();
  return data;
};

const data = dataPromise();
const Technologies = () => {

  const [stack, setStack] = useState<TechTypes[]>([]);



  console.log(stack)

  return (
    <div className="px-3 container mx-auto">
      {/* heading ----------- */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 font-inter">
          Explore The <span className="linear">Technologies</span>
        </h1>
        <p className="">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className=" grid grid-cols-12 gap-4 md:gap-6">
        {/* Cards --------- */}

        {/* Tech Cards ------- */}

        <Suspense fallback={
          <div className="w-full flex col-span-12">
            <LoadingSpinner></LoadingSpinner>
          </div>
        }>

        
          <Tech data={data}
          stack={stack}
          setStack={setStack}
          
          ></Tech>
        </Suspense>

        {/* Stacks Card--------  */}
        <aside className="  col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          <div className="sticky top-20 border border-[#94A3B8] rounded-2xl p-5">
            <h3 className="font-jakarta font-bold mb-1 text-[#0F172A]">
              Your Stack
            </h3>
            <p className="font-jakarta text-[#94A3B8] text-sm mb-4">
              {stack.length} technologies selected.
            </p>

{/* 1 - */}
{stack.length === 0 ?  <div className="border border-dashed border-[#94A3B8] rounded-2xl mb-2">
              {/* empty stack ------- */}
              <p className="font-jakarta text-[#94A3B8]  py-6 text-center">
                Your Stack is Empty.
              </p>
            </div>
          :

         stack.map(item => <div key={item.id} className="border border-[#94A3B8] rounded-2xl p-3 flex justify-between mb-2">
        <div className="flex items-center">
            <div>
                <img className="mr-3 h-7" src={item.icon} width={'28px'} alt="" />
            </div>
        <div>
            <h5 className="font-jakarta font-bold mb-1 text-[#0F172A] text-[12px]">
                {item.name}
            </h5>
            <p className="font-jakarta text-[#94A3B8] text-[8px]">{item.category}</p>
        </div>
        </div>
        <div className="">
            <CiSquareRemove className=" btn  btn-square btn-secondary border-0 text-3xl"/>

        </div>
    </div>)
            
          
          }
           

         



            <div className="">
              <button className="text-[#D82C20]  font-inter font-semibold text-sm py-2 my-10 border border-[#ED8C85] rounded-lg text-center cursor-pointer w-full btn btn-ghost">
                Remove All
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Technologies;
