import { reactive } from "vue";
import { router } from "@/router/index";
import { useUser } from "@/hooks/useUser";
import { createLocalStorage } from "@/utils/storage";


const { setToken, setUserInfo } = useUser();
const ls = createLocalStorage();

export const loginOutHandle = () => {
  ls.clear();
  setToken(null);
  setUserInfo(null);
  router.push({ name: "students" });
};