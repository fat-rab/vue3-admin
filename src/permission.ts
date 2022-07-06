import store from "@/store/index"
import router from "@/router/index"
import {NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from "vue-router";
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import {whiteList} from "@/setting"
import {UserActionEnum} from "@/ts/store/user";
import {PermissionActionsEnum} from "@/ts/store/permission"
import {ElMessage} from "element-plus";


NProgress.configure({showSpinner: false}) //进度环隐藏

router.beforeEach(async(to: RouteLocationNormalized, form: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    if (store.state.user.token) {
        if (to.path === "/login") {
            next({path: "/"})
            NProgress.done()
        } else {
            if (store.state.user.roles.length === 0) {
                try {
                    await store.dispatch(`user/${UserActionEnum.GET_USER_INFO}`)
                    const roles = store.state.user.roles
                    if (roles.length === 0) {
                        throw new Error('')
                    }
                    await store.dispatch(`permission/${PermissionActionsEnum.GET_PERMISSION_ROUTES}`, roles)
                    store.state.permission.permissionRoutes.forEach((item) => {
                        router.addRoute(item as RouteRecordRaw)
                    })
                    // 避免退出系统，使用权限小于之前退出账号的账号再次登录，重定向到之前退出的没有访问权限的页面时候报错
                    if (to.name && !router.hasRoute(to.name)) {
                        next({path: '/', replace: true})
                    } else {
                        // 不直接使用next({...to, replace: true}),避免在动态路由的页面刷新浏览器出现警告并且跳转到404页面
                        if (to.path == '/404' && to.redirectedFrom != undefined) {
                            next({path: to.redirectedFrom?.fullPath, query: to.redirectedFrom?.query, replace: true})
                        } else {
                            next({...to, replace: true})
                        }
                    }
                } catch (err) {
                    await store.dispatch(`user/${UserActionEnum.RESET_TOKEN}`)
                    ElMessage({
                        type: 'error',
                        message: '该账号没有权限访问此页面,请更换账号'
                    })
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            } else {
                next()
            }
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            const query = {}
            Object.keys(to.query).forEach((item) => {
                query[item] = to.query[item]
            })
            next({
                path: '/login',
                query: {
                    redirect: to.path,
                    ...query
                }
            })
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
