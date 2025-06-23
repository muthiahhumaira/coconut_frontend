"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BannerCoconut from "../../../public/images/bgartikel.png";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";
import { ArticleData, getArticles } from "@/data/articles";
import { getReadingTime } from "@/utils/readingTime";
import { TbPointFilled } from "react-icons/tb";
import { Pagination } from "@/data/products";
import PaginationComponent from "@/components/pagination/Pagination";
import { useSearchParams } from "next/navigation";

interface Props {}

const page = (props: Props) => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>();

  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getArticles(page, 9);
        setArticles(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="bg-white">
      <Image className="w-full bg-white" alt="background" src={BannerCoconut} />
      <div className="mx-auto lg:w-[1280px] bg-white w-11/12">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 bg-white">
          {isLoading ? (
            <div className="bg-white"><p>Loading...</p></div>
          ) : (
            articles?.map((article) => (
              <Link
                href={`articles/${article.id}`}
                key={article.id}
                className="border-2 rounded-xl border-[#9CA091] overflow-hidden mx-auto"
              >
                <div className="object-cover">
                  <img
                    alt="produk gambar"
                    src={article?.gambar}
                    width={120}
                    height={50}
                    className=" w-full h-72 "
                  />
                </div>
                <div className="px-7 py-5">
                  <div className="flex items-center space-x-2">
                    <Image
                      alt="logo"
                      width={40}
                      height={40}
                      src="/images/logococonut.png"
                    />
                    <div className="flex bg-white items-end space-x-5">
                      <div className="text-black">
                        <p>{article.penulis}</p>
                        <p>
                          {new Date(article.tanggal_terbit).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      <p className="mt-2 text-sm flex items-end space-x-6">
                        <TbPointFilled size={15} />{" "}
                        {getReadingTime(article.deskripsi)}
                      </p>
                    </div>
                  </div>
                  <p className=" mt-4 text-lg font-semibold text-black">
                    {article.judul}
                  </p>

                  <div className="mt-2 text-base text-black line-clamp-3">
                    {article.deskripsi.replace(/<[^>]*>/g, "")}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className=" p-4 mb-10 bg-white">
          <PaginationComponent
            currentPage={pagination?.current_page || 0}
            totalPages={pagination?.total_pages || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
