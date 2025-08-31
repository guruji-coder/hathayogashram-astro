// Navigation types
export interface MenuItem {
  label: string;
  name?: string; // For backward compatibility
  href?: string;
  items?: MenuItem[]; // For nested menu items
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  label?: string; // For backward compatibility
  href: string;
  description?: string;
}

export interface NavigationState {
  isMobileMenuOpen: boolean;
  activeDropdown: string | null;
}
