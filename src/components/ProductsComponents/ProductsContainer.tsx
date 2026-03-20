/** @format */

"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select, Space, message } from "antd";
import type { TablePaginationConfig } from "antd";

import { Title } from "@/components/StyledComponents/Title";
import type { AppDispatch, RootState } from "@/redux/store";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/redux/features/Products/ProductsAPI";
import type { Category } from "@/types/ProductsTypes";
import {
  setPagination,
  setSearch,
  setSelectedCategory,
} from "@/redux/features/Products/ProductsSlice";
import ProductsTable from "./ProductsTable";
import styles from "@/scssstyles/CommonStyles.module.scss";

const ProductsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [messageApi, contextHolder] = message.useMessage();

  const { page, pageSize, search, selectedCategory } = useSelector(
    (state: RootState) => state.products,
  );

  const queryParams = {
    limit: pageSize,
    skip: (page - 1) * pageSize,
    q: search || undefined,
    category: search ? undefined : selectedCategory,
  };

  const {
    data: productsData,
    isFetching,
    isLoading: isProductsLoading,
    isError,
  } = useGetProductsQuery(queryParams);
  const { data: categoriesData } = useGetCategoriesQuery();

  React.useEffect(() => {
    if (isError) {
      messageApi.error("Failed to fetch products");
    }
  }, [isError, messageApi]);

  const handleSearch = (value: string) => {
    if (value.trim()) {
      dispatch(setSelectedCategory(undefined));
    }
    dispatch(setSearch(value.trim()));
  };

  const handleCategoryChange = (value: string | undefined) => {
    dispatch(setSearch(""));
    dispatch(setSelectedCategory(value && value !== "all" ? value : undefined));
  };

  const handleTableChange = (pagination: TablePaginationConfig) => {
    dispatch(
      setPagination({
        page: pagination.current ?? 1,
        pageSize: pagination.pageSize ?? pageSize,
      }),
    );
  };

  const categoryOptions = [
    { label: "All", value: "all" },
    ...(categoriesData ?? []).map((category: Category) => ({
      label: category.name,
      value: category.slug,
    })),
  ];

  const tableData = productsData?.products ?? [];
  const tableTotal = productsData?.total ?? 0;
  const isLoading = isProductsLoading || isFetching;

  return (
    <div className="w-full space-y-4">
      {/* This the the antd message component for showing the error message when fetching products fails and passed the props to message component */}
      {contextHolder}

      {/* Used the Title Styled component for the heading of the products page. */}
      <Title>Products List</Title>

      <div className="flex w-full justify-end">
        <Space wrap>
          {/* This is the search field for products and passed the props to search component  */}
          <Input.Search
            allowClear
            placeholder="Search products"
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
            onSearch={handleSearch}
            className={styles.searchFieldView}
          />

          {/* This is the select field for category filter and passed the props to select component */}
          <Select
            allowClear
            placeholder="Select category"
            options={categoryOptions}
            value={selectedCategory ?? "all"}
            onChange={handleCategoryChange}
            style={{ width: 200 }}
            className={styles.productViewButton}
          />
        </Space>
      </div>

      {/* This is the Products table called and passed the props to products table component */}
      <ProductsTable
        data={tableData}
        loading={isLoading}
        onView={(id) => navigate(`/products/${id}`)}
        onPaginationChange={handleTableChange}
        pagination={{
          current: page,
          pageSize,
          total: tableTotal,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
          showTotal: (value) => `Total ${value} products`,
        }}
      />
    </div>
  );
};

export default ProductsContainer;
