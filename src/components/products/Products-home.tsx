"use client";
import React, { useRef } from "react";
import OurProducts from "./Ourproduct";

const ProductsHome = () => {
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-11/12 lg:w-[1280px] mx-auto ">
      <div className="text-black mt-12 h-full">
        <div className=" block lg:flex w-11/12 mx-auto justify-between">
          <div className="w-full lg:w-2/5 ">
            <h1 className="text-3xl w-2/3  font-bold">
              Serve Nature's Best – Pure Coconut, Pure Pleasure
            </h1>
          </div>
          <div className="w-full lg:w-3/5">
            <h1 className="text-justify">
              Amerta Coco (PT. Amerta Agro Indonesia) is Best Coconut Supplier
              From Indonesia as generations of experience in developing coconut
              based products. Creating a sustainable synergy that integrates
              business with the environment, we value social stability within
              our communities. Embolden with the spirit of innovation, we
              dedicate research into the creation of products that are essential
              to our partners and consumers.
            </h1>
            <button
              onClick={scrollToProducts}
              className="bg-white border cursor-pointer border-black text-black px-3 py-2 rounded-full mt-5"
            >
              Get to Know More
            </button>
          </div>
        </div>
        <div ref={productRef} className="pt-10">
          <OurProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
