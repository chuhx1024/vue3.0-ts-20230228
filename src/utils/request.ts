import axios, { AxiosRequestConfig } from 'axios'
const service = axios.create({
    baseURL: '/api',
    timeout: 100000000000000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers['PPC-TOKEN'] = 123
        // config.headers['Cache-Control'] = 'no-cache'
        // config.headers['If-Modified_Since'] = '0'

        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    },
)
// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data || { code: 500, data: {}, message: '数据获取失败' }
        if (res.code === 1206) {
            return false
        } else {
            return res
        }
    },
    error => {
        // return Promise.reject(error)
        return error
    },
)
export default <T = any>(config: AxiosRequestConfig) => {
    return service(config).then(res => {
        return (res.data.data || res.data) as T
    })
}
