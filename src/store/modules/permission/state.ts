import {AppRouteRecordRaw} from "@/router";
import {RouteRecordName} from "vue-router";

export interface PermissionState {
    permissionRoutes: Array<AppRouteRecordRaw>
    cachedRoutes: Array<RouteRecordName>
}

const state: PermissionState = {
    permissionRoutes: [],
    cachedRoutes: []
}

export default state
