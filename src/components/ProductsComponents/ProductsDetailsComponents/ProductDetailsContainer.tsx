/** @format */

"use client";

import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "@/scssstyles/CommonStyles.module.scss";
import { Title } from "@/components/StyledComponents/Title";

const ProductDetailsContainer = () => {
  const navigate = useNavigate();

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
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
