import request from '@/utils/request'

export function login(data: object) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data,
        contentType: 'application/x-www-form-urlencoded'
    })
}

export function getInfo() {
    return request({
        url: '/api/user/info',
        method: 'get',
        contentType: 'application/x-www-form-urlencoded'
    })
}


