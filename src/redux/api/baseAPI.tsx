/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL, // Use VITE_API_URL from .env for the base URL
  }),

  tagTypes: ["Products"],
  endpoints: () => ({}),
});

export default baseApi;
