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
              We don’t just process coconuts — we build long-term value for partners, people, and the planet.
            </h1>
          </div>
          <div className="w-full lg:w-3/5">
            <h1 className="text-justify">
              We specialize in producing high-quality, semi-finished coconut products for global industries — from food manufacturing and cosmetics to energy and agriculture. Based in Indonesia, one of the world’s richest sources of coconut, we work closely with local farmers and certified facilities to deliver sustainable, traceable, and consistent coconut ingredients at scale.
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
