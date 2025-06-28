import { baseAxios } from "@/utils/baseAxios";
import { AxiosResponse } from "axios";

export interface ProductsData {
  id: number;
  nama: string;
  deskripsi: string;
  gambar: string;
  spesifikasi: {
    Ingredients: string;
    "Moisture Content": string;
    "Oil/Fat Content": string;
    Appearance: string;
    Packaging: string;
    "Shelf Life": string;
    Certifications: string;
    Origin: string;
    Use: string;
  };
  detail_spesifikasi: string;
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface ProductsResponse {
  message: string;
  data: ProductsData[];
  pagination: Pagination;
}

export const getProducts = async (
  page: number = 1,
  limit: number = 5
): Promise<ProductsResponse> => {
  try {
    const response: AxiosResponse<ProductsResponse> = await baseAxios.get(
      `/produks?page=${page}&limit=${limit}`
    );
    console.log("🚀 ~  response.data:", response.data);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    throw new Error("Failed to fetch data");
  }
};
export const getProductDetail = async (id: number): Promise<ProductsData> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: ProductsData;
    }> = await baseAxios.get(`/produks/${id}`);
    console.log("🚀 ~ getProducts ~ response:", response);

    const productsData: ProductsData = response.data.data;
    return productsData;
  } catch (error) {
    console.log("🚀 ~ getJockeyCarryList ~ error:", error);
    throw new Error("Failed to fetch daata");
  }
};
