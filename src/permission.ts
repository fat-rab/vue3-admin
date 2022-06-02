import store from "@/store/index"
import router from "@/router/index"
import {NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from "vue-router";
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import {whiteList} from "@/setting"
import {UserActionEnum} from "@/store/modules/user/actions";
import {PermissionActionsEnum} from "@/store/modules/permission/actions"
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
                    await store.dispatch(`permission/${PermissionActionsEnum.GET_PERMISSION_ROUTES}`, roles)
                    store.state.permission.permissionRoutes.forEach((item) => {
                        router.addRoute(item as RouteRecordRaw)
                    })
                    next({...to, replace: true})
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
            next({path: `/login?redirect${to.path}`})
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
