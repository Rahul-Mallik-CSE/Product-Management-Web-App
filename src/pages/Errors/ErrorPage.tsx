/** @format */

import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styles from "@/scssstyles/CommonStyles.module.scss";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="default"
            icon={<HomeOutlined />}
            onClick={() => navigate("/products")}
            className={styles.productViewButton}
            size="large"
          >
            Back to Products
          </Button>
        }
      />
    </div>
  );
};

export default ErrorPage;
