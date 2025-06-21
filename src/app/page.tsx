"use client";
import Believes from "@/components/believes/Believes";
import Header from "@/components/header/header";
import Partnership from "@/components/partnership/Partnership";
import ProductsHome from "@/components/products/Products-home";
import Image from "next/image";
import Certification from "./products/certification/Certification";
import { useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white items-center bg-[#F3F3F3]  min-h-screen w-full pb-32 ">
      <Header onScroll={handleScroll} />
      <div ref={sectionRef} className="pt-16">
        <ProductsHome />
      </div>
      <Partnership />
      <Believes />
      <Certification />
    </div>
  );
}
