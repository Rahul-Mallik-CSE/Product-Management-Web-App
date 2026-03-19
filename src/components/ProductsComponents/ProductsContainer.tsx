/** @format */

"use client";

import { useState } from "react";
import { Input, Select, Space } from "antd";

import { Title } from "@/components/StyledComponents/Title";
import { useGetCategoriesQuery } from "@/redux/features/Products/ProductsAPI";
import type { Category } from "@/types/ProductsTypes";
import styles from "@/scssstyles/CommonStyles.module.scss";

const ProductsContainer = () => {
  const [search, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategoryValue] = useState<string>("all");

  const { data: categoriesData } = useGetCategoriesQuery();

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      setSelectedCategoryValue("all");
    }
    setSearchValue(trimmedValue);
  };

  const handleCategoryChange = (value: string | undefined) => {
    setSearchValue("");
    setSelectedCategoryValue(value ?? "all");
  };

  const categoryOptions = [
    { label: "All", value: "all" },
    ...(categoriesData ?? []).map((category: Category) => ({
      label: category.name,
      value: category.slug,
    })),
  ];

  return (
    <div className="w-full space-y-4">
      <Title>Products Filters</Title>

      <div className="flex w-full justify-end">
        <Space wrap>
          <Input.Search
            allowClear
            placeholder="Search products"
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
            onSearch={handleSearch}
            style={{ width: 260 }}
            className={styles.searchFieldView}
          />

          <Select
            allowClear
            placeholder="Select category"
            options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ width: 220 }}
            className={styles.productViewButton}
          />
        </Space>
      </div>
    </div>
  );
};

export default ProductsContainer;
