export enum PageEnum {
  ROOT_ROUTE = "/",
  // 主页
  BASE_HOME = "/home",
  BASE_HOME_NAME = "home",
  // 登录页
  BASE_LOGIN = "/login",
  BASE_LOGIN_NAME = "login",
  // 注册页
  BASE_REGISTER = "/register",
  BASE_REGISTER_NAME = "register",
  // 学生页
  BASE_NEWS = "/students",
  BASE_NEWS_NAME = "students",
  // 教师页
  BASE_STUDENTS = "/faculty",
  BASE_STUDENTS_NAME = "faculty",
  //家长页
  BASE_PARENT = "/families",
  BASE_PARENT_NAME = "families",
  //校友页
  BASE_ALUMNI = "/alumni",
  BASE_ALUMNI_NAME = "alumni",
}
// 免登 页面组件
// 免登 页面组件
export const noPermissionsRoutes = {
  ACOUNT: () => import("@/views/account/account.vue"),
};

