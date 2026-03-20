/** @format */

import { Button, Drawer, Form, Input, InputNumber, Space } from "antd";
import type {
  EditDrawerProps,
  EditProductFormValues,
} from "@/types/ProductsTypes";
import styles from "@/scssstyles/CommonStyles.module.scss";

const EditDrawer = ({ open, form, onClose, onSave }: EditDrawerProps) => {
  return (
    <Drawer
      title="Edit Product"
      size={520}
      open={open}
      onClose={onClose}
      destroyOnClose
      extra={
        <Space>
          <Button onClick={onClose} className={styles.productViewButton}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save</Button>
        </Space>
      }
    >
      <Form<EditProductFormValues> form={form} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Please enter a title" },
            { min: 3, message: "Title must be at least 3 characters" },
          ]}
        >
          <Input placeholder="Enter product title" maxLength={80} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter a description" },
            { min: 10, message: "Description must be at least 10 characters" },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Enter product description" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Please enter a price" },
            { type: "number", min: 0, message: "Price must be greater than 0" },
          ]}
        >
          <InputNumber className="w-full!" step={0.01} min={0} />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rating"
          rules={[
            { required: true, message: "Please enter a rating" },
            {
              type: "number",
              min: 0,
              max: 5,
              message: "Rating must be between 0 and 5",
            },
          ]}
        >
          <InputNumber className="w-full!" step={0.1} min={0} max={5} />
        </Form.Item>

        <Form.Item
          label="Stock"
          name="stock"
          rules={[
            { required: true, message: "Please enter stock quantity" },
            {
              type: "number",
              min: 0,
              message: "Stock must be 0 or greater",
            },
          ]}
        >
          <InputNumber className="w-full!" step={1} min={0} precision={0} />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditDrawer;
