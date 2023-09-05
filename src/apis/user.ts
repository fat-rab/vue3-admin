import request from '@/utils/request'

export function login(data: object) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data
    })
}

export function getInfo() {
    return request({
        url: '/api/user/info',
        method: 'get'
    })
}


