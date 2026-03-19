/** @format */

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  useSidebar,
} from "../ui/sidebar";

import { Link, useLocation } from "react-router-dom";
import { Briefcase } from "lucide-react";
import NavItem from "./NavItem";

export default function DashboardSidebar() {
  const { state } = useSidebar();
  const { pathname } = useLocation();

  const isCollapsed = state === "collapsed";

  const navItems = [
    {
      href: "/products",
      icon: Briefcase,
      label: "Products",
    },
  ];
  if (pathname == "/") return null;
  return (
    <Sidebar
      className={`shadow-none py-4 bg-background border-r border-none ${isCollapsed ? "px-1" : "px-4"}`}
      collapsible="icon"
    >
      <SidebarContent
        className={`bg-background border-t-2 border-l-2 border-r-2 border-border shadow-neutral-600 rounded-t-4xl
                    ${isCollapsed ? "px-0.5" : "px-2"}`}
      >
        <div
          className={`mb-6 flex items-center justify-center rounded-md ${
            isCollapsed
              ? "flex items-center w-full justify-center mx-auto p-1"
              : "gap-2"
          }`}
        >
          <Link to="/products" className="flex gap-2">
            {isCollapsed ? (
              <img src="/roxnor-icon.png" alt="Logo" width={40} height={40} />
            ) : (
              <div className="mt-2 flex items-center gap-2 h-10">
                <img
                  src="/roxnor-logo.png"
                  alt="Logo"
                  className="w-40 h-10 object-contain"
                />
              </div>
            )}
          </Link>
        </div>
        <SidebarMenu
          className={
            isCollapsed ? "px-2 space-y-1 items-center" : "md:px-1 space-y-1"
          }
        >
          {/* here called the navitems for nav buttons and passed the props to navitem component */}
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={
                !!(
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/")
                )
              }
              collapsed={isCollapsed}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="pb-16 bg-background rounded-b-4xl border-r-2 border-b-2 border-l-2 border-border shadow-neutral-600">
        {/* Footer content */}
      </SidebarFooter>
    </Sidebar>
  );
}
