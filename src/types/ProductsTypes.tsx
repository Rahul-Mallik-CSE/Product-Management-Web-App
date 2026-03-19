/** @format */

/** Basic product fields used in list and summary views. */
export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
}

/** Response shape for paginated products API results. */
export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

/** Query params used when requesting products from the API. */
export interface ProductsQueryParams {
  limit: number;
  skip: number;
  q?: string;
  category?: string;
}
