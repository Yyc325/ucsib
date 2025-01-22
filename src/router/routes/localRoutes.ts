import { AppRouteRecordRaw } from "../type";
import { ComponentCanstants } from "@/router/constants";
import { HomeFilled, Menu } from "@element-plus/icons-vue";
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
        name: "home",
        meta: {
          title: "首页",
          icon: HomeFilled,
        },
        component: ComponentCanstants["HOME_PAGE"],
      },
    ],
  },
] as AppRouteRecordRaw[];

export default localRoutes;
