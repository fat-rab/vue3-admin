import {ElMessage} from 'element-plus'

export function alertWarningMessage(message: string, duration = 3000) {
    ElMessage({
        type: 'warning',
        message,
        duration
    })
}

export function alertSuccessMessage(message: string) {
    ElMessage({
        type: 'success',
        message
    })
}

export function alertErrorMessage(message: string) {
    ElMessage({
        type: 'error',
        message
    })
}

export function alertInfoMessage(message: string) {
    ElMessage({
        message
    })
}
