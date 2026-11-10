
import { Suspense } from "react";
import Tech from "./Tech";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import type { TechTypes } from "../TechType";


const dataPromise = async():Promise<TechTypes[]>=>{
  const res =await fetch('/data.json');
  const data = res.json()
  return data;
}



const Technologies = () => {
  const data = dataPromise()
  

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

      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>

<Tech data={data}></Tech>
      </Suspense>

        

        {/* Stacks Card--------  */}
        <aside className="  col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
         <div className="sticky top-20 border border-[#94A3B8] rounded-2xl p-5">
           <h3 className="font-jakarta font-bold mb-1 text-[#0F172A]">
            Your Stack
          </h3>
          <p className="font-jakarta text-[#94A3B8] text-sm mb-4">
            No technologies selected Yet.
          </p>

          <div className="border border-dashed border-[#94A3B8] rounded-2xl mb-2">
            {/* empty stack ------- */}
            <p className="font-jakarta text-[#94A3B8]  py-6 text-center">
              Your Stack is Empty.
            </p>
          </div>

          {/* Stacks ------ */}
          {/* <div className="border border-[#94A3B8] rounded-2xl p-3 flex justify-between">
        <div className="flex items-center">
            <div>
                <img className="mr-3 h-7" src="" width={'28px'} alt="" />
            </div>
        <div>
            <h5 className="font-jakarta font-bold mb-1 text-[#0F172A] text-[12px]">
                Svelte
            </h5>
            <p className="font-jakarta text-[#94A3B8] text-[8px]">Fronted</p>
        </div>
        </div>
        <div className="">
            <CiSquareRemove className=" btn  btn-square btn-secondary border-0 text-3xl"/>

        </div>
    </div> */}

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
