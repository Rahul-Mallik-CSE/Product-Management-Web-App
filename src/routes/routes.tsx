/** @format */

import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingPage from "@/components/CommonComponents/LoadingPage";
import LayoutWrapper from "@/components/CommonComponents/LayoutWrapper";

// Lazy load pages for code splitting and better performance
const Products = lazy(() => import("@/pages/Products/Products"));

// Add more lazy loaded pages here as needed
// const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
// const Settings = lazy(() => import("@/pages/Settings/Settings"));

const AppRoutes = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* Redirect root to products */}
          <Route path="/" element={<Navigate to="/products" replace />} />

          {/* Products routes */}
          <Route path="/products" element={<Products />} />

          {/* Add more routes here as needed */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </Suspense>
    </LayoutWrapper>
  );
};

export default AppRoutes;
