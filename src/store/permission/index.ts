import {defineStore} from 'pinia'
import {PermissionActionsEnum, PermissionState} from '@/ts/store/permission'
import {filterRoute, getCachedRoutes} from '@/utils/route'
import {asyncRoutes, constantModules} from '@/router'

export const usePermissionStore = defineStore('permission', {
    state: (): PermissionState => {
        return {
            permissionRoutes: [],
            cachedRoutes: []
        }
    },
    actions: {
        [PermissionActionsEnum.GET_CACHED_ROUTES]() {
            this.cachedRoutes = getCachedRoutes([...constantModules, ...asyncRoutes])
        },
        [PermissionActionsEnum.GET_PERMISSION_ROUTES](payload: Array<string>) {
            this.permissionRoutes = filterRoute(asyncRoutes, payload)
        }
    }
})
