import { AppRouteRecordRaw } from "../type";
import { ComponentCanstants } from "@/router/constants";
export const baseRoutes = [
  {
    path: "/login",
    name: "login",
    component: ComponentCanstants["LOGIN"],
    meta: {
      title: "登录页",
    },
  },
  {
    path: "/register",
    name: "register",
    component: ComponentCanstants["REGISTER"],
    meta: {
      title: "注册页",
    },
  },
] as AppRouteRecordRaw[];
