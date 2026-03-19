/** @format */

import { Link } from "react-router-dom";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import type { NavItemProps } from "@/types/CommonTypes";

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={active}
        render={<Link to={href} />}
        className={cn(
          collapsed
            ? "flex items-center justify-center px-1 py-1 transition-colors rounded-md w-8 h-8 mx-auto"
            : "flex items-center gap-3 h-10 md:h-10 rounded-md p-3 transition-colors text-sm",
          active
            ? "bg-button text-primary hover:bg-button/80 font-medium border-4 border-button-border shadow-md"
            : "text-secondary hover:bg-muted hover:text-primary font-medium",
        )}
      >
        <Icon size={collapsed ? 16 : 18} />
        {!collapsed && <span className="text-base">{label}</span>}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default NavItem;
