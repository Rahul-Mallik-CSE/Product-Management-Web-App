/** @format */

import { EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import type {
  Product,
  ProductTableColumnDef,
  ProductsTableProps,
} from "@/types/ProductsTypes";
import styles from "@/scssstyles/CommonStyles.module.scss";

// This is the products table component which is used to display the products in a table format and passed the props to table component
const productTableColumns: ProductTableColumnDef[] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    ellipsis: true,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Action",
    key: "action",
    width: 120,
  },
];

const ProductsTable = ({
  data,
  loading,
  pagination,
  onPaginationChange,
  onView,
}: ProductsTableProps) => {
  // this is the columns definition for the products table and added custom render for price, rating, category and action column to display the data in a better format and passed the props to table component
  const columns: TableColumnsType<Product> = productTableColumns.map(
    (column) => {
      if (column.key === "price") {
        return {
          ...column,
          render: (value: number) => `$${value.toFixed(2)}`,
        };
      }

      if (column.key === "rating") {
        return {
          ...column,
          render: (value: number) => value.toFixed(2),
        };
      }

      if (column.key === "category") {
        return {
          ...column,
          render: (value: string) => value.replace(/-/g, " "),
        };
      }

      if (column.key === "action") {
        return {
          ...column,
          render: (_: unknown, record: Product) => (
            // This is the view button for each product in the table and passed the props to button component
            <Button
              icon={<EyeOutlined />}
              onClick={() => onView(record.id)}
              className={styles.productViewButton}
            >
              View
            </Button>
          ),
        };
      }

      return column;
    },
  );

  return (
    // This is the antd table component for displaying the products in a table format and passed the props to table component
    <Table<Product>
      className={styles.paginationButton}
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={pagination}
      onChange={onPaginationChange}
      scroll={{ x: 900 }}
    />
  );
};

export default ProductsTable;
