"use client";
import { ArticleData, getArticlesDetail } from "@/data/articles";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {}

const page = (props: Props) => {
  const [articles, setArticles] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams().id;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getArticlesDetail(Number(id));
        setArticles(response);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("🚀 ~ page ~ articles:", articles);

  return (
    <div className="bg-[url('/images/contac.png')] bg-cover bg-center h-full w-full ">
      <div className=" bg-black/60 ">
        <div className="lg:w-[1280px] mx-auto w-11/12 py-20">
          {articles && (
            <div className="bg-white px-8 py-5 rounded-xl ">
              <p className="font-bold text-[#474546] text-2xl">
                {articles.judul}
              </p>
              <p>
                {new Date(articles.tanggal_terbit).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <img src={articles.gambar} className="mx-auto rounded-xl" />
              <p className="mt-5 text-lg text-black text-justify">
                {articles.deskripsi.replace(/<[^>]*>/g, "")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
