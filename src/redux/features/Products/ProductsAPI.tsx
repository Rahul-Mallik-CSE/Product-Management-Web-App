/** @format */

import baseApi from "@/redux/api/baseAPI";
import type {
  ProductsQueryParams,
  ProductsResponse,
} from "@/types/ProductsTypes";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, ProductsQueryParams>({
      query: ({ limit, skip, q, category }) => {
        const trimmedQuery = q?.trim();

        // If there's a non-empty search query, use the search endpoint
        if (trimmedQuery) {
          return {
            url: "/products/search",
            params: { q: trimmedQuery, limit, skip },
          };
        }
        // If there's a category filter but no search query, use the category endpoint
        if (category) {
          return {
            url: `/products/category/${category}`,
            params: { limit, skip },
          };
        }
        // Default to the general products endpoint if no search query or category filter is provided
        return {
          url: "/products",
          params: { limit, skip },
        };
      },
      keepUnusedDataFor: 300,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
export default productsApi;
