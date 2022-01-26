import {RouteRecordRaw} from "vue-router";

export interface PermissionState {
    permissionRoutes: Array<RouteRecordRaw>
}

const state = {
    permissionRoutes: []
}

export default state
