const FOREGROUND_LAYOUT = () => import("@/views/foreground/foreground.vue");
// 首页
const HOME_PAGE = () => import("@/views/foreground/home/home.vue");

// 学生
const STUDENTS_PAGE = () => import("@/views/foreground/students/students.vue");
// 新闻
const NEWS_PAGE = () => import("@/views/foreground/news/news.vue");
export default {
  FOREGROUND_LAYOUT,
  HOME_PAGE,
  STUDENTS_PAGE,
  NEWS_PAGE,
};
