export interface MenuItem {
  label: string;
  url: string;
  submenu?: MenuItem[];
}

export interface Menu {
  id: number;
  title: string;
  menu_items: MenuItem[];
}
