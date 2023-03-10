import request from '@/utils/request'
import { ILoginResponse } from './types/login'

// 用户登录
export const login = (data: {
    userName: string,
    passWord: string,
  }) => {
    return request<ILoginResponse>({
        method: 'POST',
        url: '/login',
        data,
    })
}
