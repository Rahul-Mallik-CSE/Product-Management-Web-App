/** @format */

import baseApi from "@/redux/api/baseAPI";
import type {
  Category,
  ProductsQueryParams,
  ProductsResponse,
  ProductDetails,
} from "@/types/ProductsTypes";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // This is for fetching products with support for search and category filtering. It dynamically chooses the appropriate endpoint based on the presence of a search query or category filter.
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

    // This is the endpoint for fetching the list of product categories.
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "/products/categories",
      }),
      providesTags: ["Categories"],
    }),

    // This is the endpoint for fetching detailed information about a single product by its ID.
    getProductById: builder.query<ProductDetails, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      keepUnusedDataFor: 300,
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} = productsApi;
export default productsApi;
