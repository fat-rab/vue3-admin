export interface ListParam {
    pageSize: number
    pageNum: number

    [key: string]: any
}

export interface ColumnInterface {
    label: string
    prop?: string
    minWidth?: number
    width?: number
    align?: string
    headerAlign?: string
    fixed?: boolean | 'left' | 'right'

    [key: string]: any
}

export interface TableDataInterface {
    [key: string]: any
}

export interface Param {
    row: TableDataInterface
    column: ColumnInterface
    index: number | string
}
