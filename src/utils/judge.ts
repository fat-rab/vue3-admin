/**
 * @description 是否是外链
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string):boolean {
    return /^(https?:|mailto:|tel:)/.test(path)
}
