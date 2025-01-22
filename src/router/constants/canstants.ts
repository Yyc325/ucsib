export enum PageEnum {
  ROOT_ROUTE = "/",
  // 主页
  BASE_HOME = "/recursiveComponent",
  BASE_HOME_NAME = "home",
  // 登录页
  BASE_LOGIN = "/login",
  BASE_LOGIN_NAME = "login",
  // 注册页
  BASE_REGISTER = "/register",
  BASE_REGISTER_NAME = "register",
}

export const noPermissionsRoutes = {
  LOGIN: () => import("@/views/Login/Login.vue"),
  REGISTER: () => import("@/views/Register/register.vue"),
};
