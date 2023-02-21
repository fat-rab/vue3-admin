import router from '@/router/index'
import {NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {whiteList} from '@/setting'
import {UserActionEnum} from '@/ts/store/user'
import {PermissionActionsEnum} from '@/ts/store/permission'
import {ElMessage} from 'element-plus'
import {getToken} from '@/utils/auth'
import {useUserStore} from '@/store/user'
import {usePermissionStore} from '@/store/permission'
import {RouteRedirect} from '@/ts/router'

NProgress.configure({showSpinner: false}) //进度环隐藏

router.beforeEach(async(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done()
        } else {
            const userStore = useUserStore()
            const permissionStore = usePermissionStore()
            if (userStore.roles.length === 0) {
                try {
                    await userStore[UserActionEnum.GET_USER_INFO]()
                    const roles = userStore.roles
                    if (roles.length === 0) {
                        throw new Error('账号没有权限访问')
                    }
                    await permissionStore[PermissionActionsEnum.GET_PERMISSION_ROUTES](roles)
                    permissionStore.permissionRoutes.forEach((item) => {
                        router.addRoute(item as RouteRecordRaw)
                    })
                    // 如果是从登陆页面过来的，可能需要重定向
                    if (from.path === '/login') {
                        const str = sessionStorage.getItem('redirect')
                        if (str) {
                            const routeMsg: RouteRedirect = JSON.parse(str)
                            if (routeMsg.name && router.hasRoute(routeMsg.name)) {
                                next({path: routeMsg.path, query: routeMsg?.query, replace: true})
                            } else {
                                next({path: '/', replace: true})
                            }
                            sessionStorage.removeItem('redirect')
                            return
                        }
                    }
                    // 不直接使用next({...to, replace: true}),避免在动态路由的页面刷新浏览器出现警告并且跳转到404页面
                    if (to.path == '/404' && to.redirectedFrom !== undefined) {
                        // 即使重定向的的路由真的不存在，由于此时已经获取到角色，所以store.state.user.roles.length === 0不会通过
                        // 不会无限循环这个操作
                        next({path: to.redirectedFrom?.fullPath, query: to.redirectedFrom?.query, replace: true})
                    } else {
                        next({...to, replace: true})
                    }

                } catch (err) {
                    await userStore[UserActionEnum.RESET_TOKEN]()
                    ElMessage({
                        type: 'error',
                        message: '该账号没有权限访问此页面,请更换账号'
                    })
                    next('/login')
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
            next({
                path: '/login',
            })
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
