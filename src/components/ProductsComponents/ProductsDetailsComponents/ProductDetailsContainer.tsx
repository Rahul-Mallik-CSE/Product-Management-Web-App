/** @format */

import { Alert, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "@/redux/features/Products/ProductsAPI";
import type { ProductDetails } from "@/types/ProductsTypes";
import Details from "./Details";
import ImageView from "./ImageView";
import styles from "@/scssstyles/CommonStyles.module.scss";
import { Title } from "@/components/StyledComponents/Title";
import DetailsPageSkeleton from "./DetailsPageSkeleton";

const ProductDetailsContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data, isLoading, isFetching, isError, error } =
    useGetProductByIdQuery(productId, {
      skip: Number.isNaN(productId) || productId <= 0,
    });

  const product = data as ProductDetails | undefined;

  if (isLoading || isFetching) {
    return <DetailsPageSkeleton />;
  }

  if (isError || !product) {
    const errorMessage =
      typeof error === "object" && error !== null && "status" in error
        ? `Failed to load product details (status: ${String(error.status)})`
        : "Failed to load product details.";

    return <Alert type="error" showIcon message={errorMessage} />;
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            type="default"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/products")}
            className={styles.productViewButton}
            aria-label="Back to products"
          />
          <Title>Product Details</Title>
        </div>
        <Button type="default" className={styles.productViewButton}>
          Edit Product
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ImageView
          title={product.title}
          thumbnail={product.thumbnail}
          images={product.images}
        />
        <Details product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
