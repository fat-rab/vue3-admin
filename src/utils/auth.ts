const TokenKey = 'Admin-Token'

export function getToken(): string {
    return sessionStorage.getItem(TokenKey) || ""
}

export function setToken(token: string): void {
    return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey)
}
