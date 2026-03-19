/** @format */

/// This is the navbar types file. 
import type { LucideIcon } from "lucide-react";
export interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}
