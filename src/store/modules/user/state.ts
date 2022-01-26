export interface UserState {
    token: string
    name: string
    roles: string[]
}

const state: UserState = {
    token: sessionStorage.getItem("token")||'',
    name: '',
    roles: [],
}
export default state
