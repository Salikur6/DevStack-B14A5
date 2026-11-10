import { FaStar } from "react-icons/fa";

const Technologies = () => {
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

      {/* Tech Cards ------- */}

      {/* Cards and Stacks ---------- */}
      <div className=" grid grid-cols-12 gap-4 md:gap-6">
        {/* Cards --------- */}
        <div className="col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-9  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {/* card-1  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] text-xs bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B] text-justify">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] text-[10px] font-bold bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] text-[10px] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-xs flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>

          {/* card -2  */}
         <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] text-xs bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B] text-justify">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] text-[10px] font-bold bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] text-[10px] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-xs flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -3  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] text-xs bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B] text-justify">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] text-[10px] font-bold bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] text-[10px] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-xs flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -4  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B]">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -5  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B]">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -6  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B]">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -7  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B]">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -8  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B]">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
          {/* card -9  */}
          <div className="border border-[#334155] p-5 rounded-2xl">
            <div className="flex justify-between mb-3">
              <img src="" width={"40px"} height={"40px"} alt="" />
              <p className="text-[#0EA5E9] bg-[#61dafb2c] py-2 px-3 rounded-2xl border-3 border-[#E0F2FE] font-bold">
                Popular
              </p>
            </div>

            <h3 className="text-xl font-bold font-jakarta mb-3">React</h3>
            <p className="text-[#64748B]">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>

            <div className="divider mb-3"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#475569] bg-[#f1f5f9cc] rounded px-3 inline py-1">
                Fronted
              </p>
              <p className="text-[#64748B] font-medium">Beginner-Friendly</p>
              <p className="text-[#334155] font-semibold text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.9
              </p>
            </div>

            <button className="mt-4 btn w-full bg-black text-white font-medium rounded-xl">
              Add to Stack
            </button>
          </div>
        </div>

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
