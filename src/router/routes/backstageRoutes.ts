/**
 * @description: 后台管理路由
 */

import { ComponentCanstants } from "../constants";
import { AppRouteRecordRaw } from "../type";
const backstageRoutes = [
  {
    path: "/backstage",
    name: "Backstage",
    component: ComponentCanstants["BACKSTAGE_LAYOUT"],
    meta: {
      title: "后台管理",
    },
    children: [
      {
        path: "user",
        name: "User",
        component: ComponentCanstants["USER_MANAGEMENT"],
        meta: {
          title: "用户管理",
          description: "用于管理所用用户信息",
        },
      },
    ],
  },
] as AppRouteRecordRaw[];
export default backstageRoutes;
