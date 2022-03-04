import {AppRouteRecordRaw} from "@/router";

export interface PermissionState {
    permissionRoutes: Array<AppRouteRecordRaw>
}

const state = {
    permissionRoutes: []
}

export default state
