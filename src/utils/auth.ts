
export const prefixStr='Bearer'
export const TokenKey = 'Authorization'

export function getToken(): string {
    return localStorage.getItem(TokenKey) || ''
}

export function setToken(token: string): void {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return localStorage.removeItem(TokenKey)
}

