"use client";
import { getProducts, Pagination, ProductsData } from "@/data/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BannerCoconut from "../../../public/images/cocnutbg.png";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import PaginationComponent from "@/components/pagination/Pagination";

const Page = () => {
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>();

  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getProducts(page, 5);
        console.log("🚀 ~ fetchData ~ response:", response);
        setProducts(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);
  console.log("🚀 ~ Page ~ pagination:", pagination);

  return (
    <div>
      <Image alt="background" src={BannerCoconut} />
      <div className="mx-auto lg:w-[1280px] w-11/12">
        <div className="mt-10 flex flex-col space-y-8 pb-10">
          {isLoading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            <>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="border rounded-xl border-[#9CA091]"
                >
                  <div
                    className={`flex py-6 px-6 items-center justify-between ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full lg:w-[60%]">
                      <p className="font-bold text-[#474546] text-2xl">
                        {product.nama}
                      </p>
                      <div className="w-full flex justify-center">
                        <img
                          alt="produk gambar"
                          src={product?.gambar}
                          className="lg:hidden w-full h-auto object-cover max-w-[150px]"
                        />
                      </div>
                      <p className="mt-3 mb-4 text-justify whitespace-pre-line">
                        {product.deskripsi}
                      </p>

                      <Link
                        className="flex items-center gap-x-2"
                        href={`/products/${product.id}`}
                      >
                        Detail Spesification <IoArrowForwardCircle />
                      </Link>
                    </div>

                    <img
                      alt="produk gambar"
                      src={product?.gambar}
                      className="hidden lg:inline w-full h-auto object-cover max-w-[300px]"
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>No products found</p>
          )}
        </div>
        <div className=" p-4 mb-10">
          <PaginationComponent
            currentPage={pagination?.current_page || 0}
            totalPages={pagination?.total_pages || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
