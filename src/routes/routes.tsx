/** @format */

import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingPage from "@/components/CommonComponents/LoadingPage";
import LayoutWrapper from "@/components/CommonComponents/LayoutWrapper";

// Lazy load pages for code splitting and better performance
const Products = lazy(() => import("@/pages/Products/Products"));
const ProductDetails = lazy(() => import("@/pages/Products/ProductDetails"));

const AppRoutes = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* Redirect root to products */}
          <Route path="/" element={<Navigate to="/products" replace />} />

          {/* Products routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </Suspense>
    </LayoutWrapper>
  );
};

export default AppRoutes;
