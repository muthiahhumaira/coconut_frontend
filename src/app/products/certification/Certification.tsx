import React from "react";

const Partnership = () => {
  return (
    <div className="w-11/12 mt-20 lg:w-[1280px] mx-auto bg-transparent pb-20">
      <h1 className="text-center text-black text-2xl font-semibold pb-5">
        Our Certification
      </h1>
      <div className=" border-y w-full absolute left-0 right-0 py-5 border-black bg-[#f3f3f3]">
        <div className="grid grid-cols-2 lg:flex w-11/12 lg:w-[1280px] mx-auto justify-around items-center ">
          <img
            src="/images/certification/bpom.png"
            className="mx-auto"
            alt=""
          />
          <img
            src="/images/certification/halal.png"
            className="mx-auto"
            alt=""
          />
          <img
            src="/images/certification/fssc.png"
            className="mx-auto"
            alt=""
          />
          <img
            src="/images/certification/hacp.png"
            className="mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
