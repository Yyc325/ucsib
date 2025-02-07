/**
 * @description: 后台管理模块组件配置
 */

// 后台管理（布局组件）

const BACKSTAGE_LAYOUT = () => import("@/views/backstage/backstage.vue");

// 用户管理
const USER_MANAGEMENT = () =>
  import("@/views/backstage/userManagement/userManagement.vue");

export default {
  BACKSTAGE_LAYOUT,
  USER_MANAGEMENT,
};
