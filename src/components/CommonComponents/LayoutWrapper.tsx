/** @format */

import React from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/CommonComponents/DashboardSidebar";
import NavBar from "./NavBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="overflow-x-hidden">
        {/* NavBar will be rendered on all pages except the root ("/") due to its internal logic */}
        <NavBar />
        <div className="w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
