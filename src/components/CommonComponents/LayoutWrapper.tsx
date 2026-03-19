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
      <SidebarInset>
        <NavBar />
        <div className="flex-1 p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
