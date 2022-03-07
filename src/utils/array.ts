/**
 * @description 判断数组是否已经存在某个元素
 * @param {Array} arr
 * @param {string} key
 * @param {any} value
 * @returns {Boolean}
 */


export function judgeArr(arr: Array<any>, value: any, key?: string): boolean {
    let repeat = false
    arr.some((item) => {
        if (key) {
            if (item[key] === value) {
                repeat = true
                return true
            }
        } else {
            if (item === value) {
                repeat = true
                return true
            }
        }
    })


    return repeat
}


/**
 * @description 简单一维数组去重
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr: Array<number | string>) {
    return Array.from(new Set(arr))
}
