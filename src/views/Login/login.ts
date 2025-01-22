import { Login, getUserInfo } from "@/apis/login";
import { LoginData } from "@/types/login";
import { ElMessage } from "element-plus";
import { reactive } from "vue";
import { router } from "@/router/index";
import { useUser } from "@/hooks/useUser";
import { createLocalStorage } from "@/utils/storage";
// data
export const state = reactive({
  loginData: {} as LoginData,
});

const { setToken, setUserInfo } = useUser();
const ls = createLocalStorage();
// methods
export const loginHandle = async () => {
  const LoginRes = await Login(state.loginData);
  if (LoginRes.success) {
    setToken(LoginRes.data.token);
    const userRes = await getUserInfo();
    if (userRes.success) {
      setUserInfo(userRes.data);
      ElMessage({
        type: "success",
        message: LoginRes.message,
      });
      router.push({ name: "home" });
    }
  } else {
    ElMessage({
      type: "error",
      message: LoginRes.message,
    });
  }
};

export const loginOutHandle = () => {
  ls.clear();
  setToken(null);
  setUserInfo(null);
  router.push({ name: "login" });
};
export const goRegister = () => {
  router.push({ name: "register" });
};
