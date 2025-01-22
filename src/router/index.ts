import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import localRoutes from "./routes/localRoutes";
import { baseRoutes } from "./routes/baseRoutes";
import { PageEnum } from "./constants/canstants";
import { useUser } from "@/hooks/useUser";
import { getUserInfo } from "@/apis/login";

const routes = [...localRoutes, ...baseRoutes] as any[];
const noPermissionsPath = [PageEnum.BASE_LOGIN, PageEnum.BASE_REGISTER] as any;
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
  router.beforeEach((to, from, next) => {
    const { getToken, setUserInfo } = useUser();
    if (getToken.value) {
      if (to.name === PageEnum.BASE_LOGIN_NAME) {
        next(from);
      } else {
        if (to.path === PageEnum.ROOT_ROUTE) {
          next({ path: PageEnum.BASE_HOME });
        } else {
          next();
        }
      }
    } else {
      if (noPermissionsPath.includes(to.path)) {
        next();
      } else {
        next(PageEnum.BASE_LOGIN);
      }
    }
  });
  router.afterEach((to, from) => {
    if (typeof to.meta.title === "string") {
      document.title = to.meta.title;
    } else {
      // 提供一个默认值或者错误处理
      document.title = "首页";
    }
  });
};
