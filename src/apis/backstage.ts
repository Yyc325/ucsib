import Axios from "@/utils/axios";
/**
 * @description: 查询所有用户
 * @param {any} data.phone 手机号
 * @param {any} data.userName 姓名
 *
 */
export const get_all_users = (data: any) => {
  return Axios.request({
    url: "/admin_role/account_all",
    method: "POST",
    data,
  });
};
