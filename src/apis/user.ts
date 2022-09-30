import request from '@/utils/request'

//import request from '@/utils/test'

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


