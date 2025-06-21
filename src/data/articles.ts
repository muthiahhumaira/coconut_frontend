import { baseAxios } from "@/utils/baseAxios";
import { AxiosResponse } from "axios";

export interface ArticleData {
  id: number;
  penulis: string;
  judul: string;
  deskripsi: string;

  gambar: string;
  created_at: string;
  updated_at: string;
  tanggal_terbit: string;
  kategori_artikel: string;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface ArticleResponse {
  message: string;
  data: ArticleData[];
  pagination: Pagination;
}

export const getArticles = async (
  page: number,
  limit: number
): Promise<ArticleResponse> => {
  try {
    const response: AxiosResponse<ArticleResponse> = await baseAxios.get(
      `/artikels?page=${page}&limit=${limit}`
    );
    console.log("🚀 ~  response.data:", response.data);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getJockeyCarryList ~ error:", error);
    throw new Error("Failed to fetch daata");
  }
};

export const getArticlesDetail = async (id: number): Promise<ArticleData> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: ArticleData;
    }> = await baseAxios.get(`/artikels/${id}`);

    const articleData: ArticleData = response.data.data;
    return articleData;
  } catch (error) {
    console.log("🚀 ~ getJockeyCarryList ~ error:", error);
    throw new Error("Failed to fetch daata");
  }
};
