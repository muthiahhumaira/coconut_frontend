"use client";
import { getProductDetail, ProductsData } from "@/data/products";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {}

const page = (props: Props) => {
  const [products, setProducts] = useState<ProductsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams().id;
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
  }, []);
  console.log("🚀 ~ page ~ products:", products);

  return (
    <div className="bg-[url('/images/productbg.png')] bg-black/80 bg-cover bg-center h-full w-full">
      {products && (
        <>
          <div className="w-11/12 lg:w-[1280px] mx-auto h-full flex items-center justify-center">
            <div className="mt-20 relative translate-x-1/12 flex justify-center mx-auto w-full">
              <div className="relative flex mx-auto w-full">
                <img
                  className="w-[500px] relative z-0 mx-auto bg-[#f3f3f3] py-3 pr-44 pl-10 rounded-2xl"
                  src={products.gambar}
                />
                <div className="bg-white -left-52 relative top-20 z-10 rounded-xl py-5 px-3 w-1/2 shadow-xl">
                  <p className="text-[#474546] font-bold text-2xl">
                    {products.nama}
                  </p>
                  <p className="whitespace-pre-line text-black">{products.deskripsi}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-10 mt-40">
            <div className="w-11/12 lg:w-[1280px] mx-auto">
              <div className="flex  space-x-10 items-center w-full justify-between">
                <div className=" w-1/2">
                  <p className="text-xl font-bold text-[#474546]">
                    Spesification
                  </p>
                  <p className="whitespace-pre-line text-black">
                    {products.detail_spesifikasi}
                  </p>
                </div>
                <div className="w-1/2 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white  bg-[#474546]">
                            Spesifikasi
                          </td>
                          <td className="border-l border-gray-300 py-3 px-4 bg-[#474546] text-white ">
                            Detail
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white  bg-[#9CA091]">
                            Category
                          </td>
                          <td className="py-3 px-4 text-black">
                            {products.spesifikasi.Odour}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white  bg-[#9CA091]">
                            Moisture
                          </td>
                          <td className="py-3 px-4 text-black">
                            {products.spesifikasi.Moisture}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white  bg-[#9CA091]">
                            Free Fatty Acid
                          </td>
                          <td className="py-3 px-4 text-black">
                            {products.spesifikasi["Free Fatty Acid"] === "FREE"
                              ? "Data not available"
                              : products.spesifikasi["Free Fatty Acid"]}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white  bg-[#9CA091]">
                            Solubility in Water
                          </td>
                          <td className="py-3 px-4 text-black">
                            {products.spesifikasi["Solubility in Water"]}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-medium text-white  bg-[#9CA091]">
                            Unsaponifiable Materia
                          </td>
                          <td className="py-3 px-4 text-black">
                            {products.spesifikasi["Unsaponifiable Materia"]}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
