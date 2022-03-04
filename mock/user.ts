const user = [
    // user login
    {
        url: '/api/user/login',
        type: 'post',
        response: () => {
            return {
                code: 20000,
                data: {
                    token: 'qweqweqweqweqweqe'
                }
            }
        }
    },

    // get user info
    {
        url: '/api/user/info',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    name: "tom",
                    roles: ["admin"],
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                }
            }
        }
    },
    // user logout
    {
        url: '/api/user/logout',
        type: 'post',
        response: () => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]
export default user
