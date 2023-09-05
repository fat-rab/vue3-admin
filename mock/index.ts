import user from './user'
import Mock from 'mockjs'

interface MockParams {
    url: string
    type: string
    response: Object

}

const mocks = [...user]
//设置延时时间
Mock.setup({
    timeout: '300-600',
})

export function mockXHR() {
    let i: MockParams
    for (i of mocks) {
        Mock.mock(new RegExp(`${import.meta.env.VITE_APP_BASE_API}${i.url}`), i.type || 'get', i.response)
    }
}
