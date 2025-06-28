"use client";
import { getProductDetail, ProductsData } from "@/data/products";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Definisikan key spesifikasi secara aman
const specs = [
  "Ingredients",
  "Moisture Content",
  "Oil/Fat Content",
  "Appearance",
  "Packaging",
  "Shelf Life",
  "Certifications",
  "Origin",
  "Use",
] as const;

type SpecKey = (typeof specs)[number];

const Page = () => {
  const [products, setProducts] = useState<ProductsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getProductDetail(Number(id));
        setProducts(response);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="bg-[url('/images/productbg.png')] bg-black/80 bg-cover bg-center min-h-screen w-full">
      {products && (
        <>
          <div className="w-11/12 lg:w-[1280px] mx-auto h-full flex items-center justify-center">
            <div className="mt-20 relative translate-x-1/12 flex justify-center mx-auto w-full">
              <div className="relative flex mx-auto w-full">
                <img
                  className="w-[500px] relative z-0 mx-auto bg-[#f3f3f3] py-3 pr-44 pl-10 rounded-2xl"
                  src={products.gambar}
                  alt={products.nama}
                />
                <div className="bg-white -left-52 relative top-20 z-10 rounded-xl py-5 px-3 w-1/2 shadow-xl">
                  <p className="text-[#474546] font-bold text-2xl">
                    {products.nama}
                  </p>
                  <p className="whitespace-pre-line text-black">
                    {products.deskripsi}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-10 mt-40">
            <div className="w-11/12 lg:w-[1280px] mx-auto">
              <div className="flex space-x-10 items-start w-full justify-between">
                <div className="w-1/2">
                  <p className="text-xl font-bold text-[#474546] mb-2">
                    Specification
                  </p>
                  <p className="whitespace-pre-line text-black">
                    {products.detail_spesifikasi}
                  </p>
                </div>

                <div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 font-medium text-white bg-[#474546] text-left">
                          Spesifikasi
                        </th>
                        <th className="py-3 px-4 font-medium text-white bg-[#474546] text-left">
                          Detail
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {specs.map((label) => (
                        <tr key={label} className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white bg-[#9CA091]">
                            {label}
                          </td>
                          <td className="py-3 px-4 text-black">
                            {products.spesifikasi?.[label] ||
                              "Data not available"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
