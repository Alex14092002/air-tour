
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import Patient from "views/Patient.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Tour from "views/Tour";
import Order from "./views/Order"
import Guide from './views/Guide'
import Point from './views/Point'
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
    component: <Patient/>,
    layout: "/admin",
  },
  {
    path: "/guide",
    name: "Quản lý hướng dẫn viên",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Guide/>,
    layout: "/admin",
  },
  {
    path: "/startlocation",
    name: "Thêm địa điểm khởi hành",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Point type="pointstart"/>,
    layout: "/admin",
  },
  {
    path: "/endlocation",
    name: "Thêm địa điểm kết thúc",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Point type="pointend"/>,
    layout: "/admin",
  },
  {
    path: "/managerBooking",
    name: "Quản lý tour du lịch",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Tour/>,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Quản lý đơn đặt",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Order type='Quản lý đặt đơn'/>,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Thanh toán",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-pin",
    component: <Order type='Thanh toán'/>,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <Patient />,
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
