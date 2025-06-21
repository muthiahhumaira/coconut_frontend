"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const imageSources = {
  s1: "/images/s1.png",
  s2: "/images/s2.png",
};

type ImageKey = keyof typeof imageSources;
const imageKeys: ImageKey[] = Object.keys(imageSources) as ImageKey[];

export default function OurProducts() {
  const [currentImage, setCurrentImage] = useState<ImageKey>("s1");

  // Ganti gambar otomatis setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = imageKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % imageKeys.length;
        return imageKeys[nextIndex];
      });
    }, 3000); // 3000 ms = 3 detik

    return () => clearInterval(interval); // bersihkan interval saat komponen unmount
  }, []);

  return (
    <section className="relative w-full  py-10 md:py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Gambar Produk */}
        <div className="w-[285px] h-[285px] rounded-[20px] overflow-hidden  flex items-center justify-center mb-8 md:mb-0">
          <img
            src={imageSources[currentImage]}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Deskripsi */}
        <div className="bg-[#9AA08E] rounded-[20px] p-6 md:p-10 md:w-[65%] mt-5 lg:mt-20 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Our Products
          </h2>
          <p className="text-black text-base leading-relaxed mb-6">
            The coconut fruit is a versatile material which can be processed
            into many value-added products. We ensure the highest quality end
            products to meet with the international trade standards.
          </p>
          <Link
            href="/products"
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#9AA08E] transition"
          >
            Get to Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
