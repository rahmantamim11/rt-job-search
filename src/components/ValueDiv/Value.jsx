import React from "react";
import logo3 from "../../Assets/logo3.png";
import logo6 from "../../Assets/logo6.png";
import logo5 from "../../Assets/logo5.png";


const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] ">
      <h1 className="text-textColor text-[25px] text-center py-[2rem] pb-[3rem] font-bold block ">
        The Value That Holds us True and To Account
      </h1>

      <div className="md:grid gap-[10rem] grid-cols-3 items-center">

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo3} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things Being Made Beautiful Simple are the Heart of Everything We Do
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo6} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            We Believe in Making Things Better for Everyone, Even if Just by a Little Bit.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo5} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            We work on the basis of creating trust which can be nurtured through authenticity and transparency
          </p>
        </div>

      </div>
      <div className="card mt-[2rem] md:flex justify-between bg-blueColor p-[5rem] rounded-[10px] ">
        <div>
            <h1 className="text-blueColor mt-4 text-[30px] font-bold ">
              Ready To Switch a Career?
            </h1>
            <h2 className="text-textColor mt-4 text-[25px] font-bold">Let's Get Started</h2>
           
        </div>

        <button className=" mt-4 border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">Get Started</button>

      </div>
    </div>
  );
};

export default Value;
