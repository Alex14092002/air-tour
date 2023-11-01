
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import ManagenTour from "./views/ManagenTour"
import Order from "./views/Order"
var routes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Quản lý khách hàng",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <TableList type='Khách hàng'/>,
    layout: "/admin",
  },
  {
    path: "/huongdanvien",
    name: "Quản lý hướng dẫn viên",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <TableList type='Hướng dẫn viên'/>,
    layout: "/admin",
  },
  {
    path: "/tour",
    name: "Quản lý tour",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <ManagenTour type='Tour du lịch'/>,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Quản lý đơn hàng",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <Order type='Đơn hàng'/>,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },
];
export default routes;
