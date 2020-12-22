// 用户相关的 API 封装

// 1. 导入网络请求
import request from "@/utils/request";

// 2. 用户的 url 的前面
const api = {
  admin:'auth'
}

// 登陆用户
export function addAdmin(data) {
  return request({
    url:`${api.admin}/login`,
    method: "get",
    params: data,
  })
}

// 退出登陆
export function logOut() {
  return request({
    url: `${api.admin}/logout`,
    method: "get"
  })
}

