import { AppRouteRecordRaw } from "../type";
import { ComponentCanstants } from "@/router/constants";
import { HomeFilled, Menu } from "@element-plus/icons-vue";
//无需权限的路由
const localRoutes = [
  {
    path: "/",
    redirect: "/home",
    component: ComponentCanstants["PARENT_LAYOUT"],
    meta: {
      title: "主页",
    },
    children: [
      {
        path: "home",
        name: "Home",
        meta: {
          title: "UCSIB",
          icon: HomeFilled,
        },
        component: ComponentCanstants["HOME_PAGE"],
      },
      {
        path: "students",
        name: "Students",
        meta: {
          title: "UCSIB",
        },
        component: ComponentCanstants["STUDENTS_PAGE"],
      },
      {
<<<<<<< HEAD
        path: "news",
        name: "News",
        meta: {
          title: "UCSIB",
        },
        component: ComponentCanstants["NEWS_PAGE"],
      },
=======
        path: "faculty",
        name: "faculty",
        meta: {
          title: "UCSIB",
        },
        component: ComponentCanstants["FACULTY_PAGE"],
      },
      {
        path: "families",
        name: "families",
        meta: {
          title: "UCSIB",
        },
        component: ComponentCanstants["FAMILIES_PAGE"],
      },
      {
        path: "alumni",
        name: "alumni",
        meta: {
          title: "UCSIB",
        },
        component: ComponentCanstants["ALUMNI_PAGE"],
      }
    ],
  },
] as AppRouteRecordRaw[];

export default localRoutes;


