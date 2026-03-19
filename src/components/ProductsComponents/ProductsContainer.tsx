/** @format */

import { Title } from "../StyledComponents/Title";
import { Input, Select, Space, message } from "antd";

const ProductsContainer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div className="w-full space-y-4">
      {/* Used to show the message or notifion to the user using antd. */}
      {contextHolder}

      <Title>Products List</Title>

      <div className="flex w-full justify-end">
        <Space wrap>
          <Input.Search
            allowClear
            placeholder="Search products"
            value=""
            style={{ width: 260 }}
          />

          <Select
            allowClear
            placeholder="Select category"
            style={{ width: 200 }}
            options={[]}
          />
        </Space>
      </div>
    </div>
  );
};

export default ProductsContainer;
