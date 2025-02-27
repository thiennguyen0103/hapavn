import { TNavSidebar } from "../@types/common";
import {
  Calendar1,
  Cart,
  History,
  Home,
  HomeAdmin,
  Money,
  More,
  Noti,
  SettingAdmin,
  User,
  UserAdmin,
} from "../lib/assets";

export const adminNavSidebar: TNavSidebar[] = [
  {
    name: "Menu 1",
    icon: HomeAdmin,
    path: "/menu-1",
  },
  {
    name: "Menu 2",
    icon: Cart,
    path: "/menu-2",
  },
  {
    name: "Menu 3",
    icon: Noti,
    path: "/menu-3",
  },
  {
    name: "Menu 4",
    icon: UserAdmin,
    path: "/menu-4",
    children: [
      {
        name: "Menu 4a",
        path: "/menu-4a",
      },
      {
        name: "Menu 4b",
        path: "/menu-4b",
      },
      {
        name: "Menu 4c",
        path: "/menu-4c",
      },
    ],
  },
  {
    name: "Menu 5",
    icon: SettingAdmin,
    path: "/menu-5",
    children: [
      {
        name: "Menu 5a",
        path: "/menu-5a",
      },
      {
        name: "Menu 5b",
        path: "/menu-5b",
      },
      {
        name: "Menu 5c",
        path: "/menu-5c",
      },
      {
        name: "Menu 5d",
        path: "/menu-5d",
      },
      {
        name: "Menu 54",
        path: "/menu-54",
      },
    ],
  },
];

export const customerNavSidebar: TNavSidebar[] = [
  {
    name: "Trang chủ",
    icon: Home,
    path: "/",
  },
  {
    name: "Thời gian thay lõi",
    icon: Calendar1,
    path: "/thoi-gian-thay-loi",
  },
  {
    name: "Lịch sử đơn hàng",
    icon: History,
    path: "/don-hang",
  },
  {
    name: "Điểm tích lũy",
    icon: Money,
    path: "/diem-tich-luy",
  },
  {
    name: "Tài khoản",
    icon: User,
    path: "/tai-khoan",
  },
  {
    name: "Tính năng khác",
    icon: More,
    path: "/tinh-nang-khac",
  },
];

export const customerMobileNavSidebar: TNavSidebar[] = [
  {
    name: "Trang chủ",
    icon: Home,
    path: "/",
  },
  {
    name: "Lịch thay",
    icon: Calendar1,
    path: "/thoi-gian-thay-loi",
  },
  {
    name: "Điểm thưởng",
    icon: Money,
    path: "/don-hang",
  },
  {
    name: "Đơn hàng",
    icon: History,
    path: "/diem-tich-luy",
  },
  {
    name: "Cá nhân",
    icon: User,
    path: "/tai-khoan",
  },
];
