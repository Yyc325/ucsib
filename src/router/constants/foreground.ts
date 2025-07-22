const FOREGROUND_LAYOUT = () => import("@/views/foreground/foreground.vue");
// 首页
const HOME_PAGE = () => import("@/views/foreground/home/home.vue");

// 学生
const STUDENTS_PAGE = () => import("@/views/foreground/students/students.vue");
// 新闻
const NEWS_PAGE = () => import("@/views/foreground/news/news.vue");
// 关于
const ABOUT_PAGE = () => import("@/views/foreground/about/about.vue");
// 学术研究
const ACADEMIC_PAGE = ()=> import("@/views/foreground/academics/academics.vue")
// 入学
const ADMISSION_PAGE = ()=> import("@/views/foreground/admission/admission.vue")

export default {
  FOREGROUND_LAYOUT,
  HOME_PAGE,
  STUDENTS_PAGE,
  NEWS_PAGE,
  ABOUT_PAGE,
  ACADEMIC_PAGE,
  ADMISSION_PAGE
};
